import { Component, OnInit, OnDestroy } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-tooltips-barchart',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class TooltipsBarChartPage implements OnInit, OnDestroy {
	public ID = 'TooltipsBarChartPage';
	private toolbox = new Toolbox(this.ID);

	constructor() { this.toolbox.log('constructor'); }

	ngOnDestroy() { this.toolbox.log('ngOnDestroy'); }

	ngOnInit() {
		this.toolbox.log('ngOnInit');
		this.demo();
	}

	demo() {
		this.toolbox.log('demo');

		const margin = { top: 40, right: 20, bottom: 30, left: 40 };
		const width = 960 - margin.left - margin.right;
		const height = 500 - margin.top - margin.bottom;

		const x = d3Scale.scaleOrdinal().domain([0, 100]).range([0, width]);
		const y = d3Scale.scaleLinear().domain([0, 100]).range([height, 0]);

		const xAxis = d3Axis.axisBottom(x);
		const yAxis = d3Axis.axisLeft(y).tickFormat(d3.format('.0%'));

		const svg = d3.select('#playground')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		/*
		const tip = d3.tip()
			.attr('class', 'd3-tip')
			.offset([-10, 0])
			.html(d => '<strong>Frequency:</strong> <span style=\'color:red\'>' + d.frequency + '</span>');
		svg.call(tip);
		*/
		d3.tsv('/assets/data/tooltips_barchart.tsv', type, (error, data) => {
			x.domain(data.map(d => d.letter));
			y.domain([0, d3.max(data, d => d.frequency)]);

			svg.append('g')
				.attr('class', 'x axis')
				.attr('transform', 'translate(0,' + height + ')')
				.call(xAxis);

			svg.append('g')
				.attr('class', 'y axis')
				.call(yAxis)
				.append('text')
				.attr('transform', 'rotate(-90)')
				.attr('y', 6)
				.attr('dy', '.71em')
				.style('text-anchor', 'end')
				.text('Frequency');

			svg.selectAll('.bar')
				.data(data)
				.enter().append('rect')
				.attr('class', 'bar')
				.attr('x', d => x(d.letter))
				.attr('width', x.rangeBand())
				.attr('y', (d) => y(d.frequency))
				.attr('height', (d) => height - y(d.frequency))
				/*
				.on('mouseover', tip.show)
				.on('mouseout', tip.hide)
				*/
				;

		});

		function type(d) {
			d.frequency = +d.frequency;
			return d;
		}
	}
}
