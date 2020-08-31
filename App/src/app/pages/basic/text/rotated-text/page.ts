import { Component, AfterViewInit, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import * as d3Format from 'd3-format';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-rotated-text',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class RotatedTextPage implements OnInit {
	public ID = 'BasicShapesPage';
	private toolbox = new Toolbox(this.ID);

	constructor() {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.demo();
	}

	demo() {
		const margin = { top: 30, right: 20, bottom: 70, left: 50 };
		const width = 600 - margin.left - margin.right;
		const height = 270 - margin.top - margin.bottom;

		const svg = d3.select('#playground')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform',
				'translate(' + margin.left + ',' + margin.top + ')');

		d3.csv('/assets/data/date_value.csv',
			(item) => {
				return { date: d3.timeParse('%Y-%m-%d')(item.date), value: item.value };
			},
			(data) => {
				// Add X axis --> it is a date format
				const x = d3.scaleTime()
					.domain(d3.extent(data, (d) => d.date))
					.range([0, width]);

				svg.append('g')
					.attr('transform', 'translate(0,' + height + ')')
					.call(d3.axisBottom(x));

				// Add Y axis
				const y = d3.scaleLinear()
					.domain([0, d3.max(data, (d) => +d.value)])
					.range([height, 0]);

				svg.append('g')
					.call(d3.axisLeft(y));

				// Add the line
				svg.append('path')
					.datum(data)
					.attr('fill', 'none')
					.attr('stroke', 'steelblue')
					.attr('stroke-width', 1.5)
					.attr('d', d3.line()
						.x((d) => x(d.date))
						.y((d) => y(d.value))
					);
			});
	}
}
