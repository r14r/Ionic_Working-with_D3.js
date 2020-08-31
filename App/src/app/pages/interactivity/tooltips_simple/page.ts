import { Component, OnInit, OnDestroy } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-rotated-text',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class TooltipsSimplePage implements OnInit, OnDestroy {
	public ID = 'TooltipsPage';
	private toolbox = new Toolbox(this.ID);

	constructor() { this.toolbox.log('constructor'); }

	ngOnDestroy() { this.toolbox.log('ngOnDestroy'); }

	ngOnInit() {
		this.toolbox.log('ngOnInit');
		this.demo();
	}

	demo() {
		this.toolbox.log('demo');

		const margin = { top: 30, right: 20, bottom: 30, left: 50 };
		const width = 600 - margin.left - margin.right;
		const height = 270 - margin.top - margin.bottom;

		// Adds the svg canvas
		const svg = d3
			.select('#playground')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		// Define the axes
		const x = d3Scale.scaleLinear().domain([0, 100]).range([0, width]);
		const y = d3Scale.scaleLinear().domain([0, 100]).range([height, 0]);

		const xAxis = d3Axis.axisBottom(x).tickFormat(d3.timeFormat('%m/%d'));
		const yAxis = d3Axis.axisLeft(y).ticks(10);

		// Define the line
		const valueline = d3.line()
			.x((d) => x(d.date))
			.y((d) => y(d.value));

		// Define the div for the tooltip
		const div = d3
			.select('body')
			.append('div')
			.attr('class', 'tooltip')
			.style('opacity', 0);

		// Parse the date / time
		const parseDate = d3.timeParse('%Y-%m-%d');
		const printTime = d3.timeFormat('%e %B');

		// Get the data
		d3.csv('/assets/data/date_value_2.csv', (error, data) => {
			data.forEach((d) => {
				d.date = parseDate(d.date);
				d.value = +d.value;
			});

			console.table(data.slice(0, 10));

			this.toolbox.log('Scale the range of the data');
			x.domain(d3.extent(data, (d) => d.date));
			y.domain([0, d3.max(data, (d) => d.value)]);

			this.toolbox.log('Add the X Axis');
			svg.append('g')
				.attr('class', 'x axis')
				.attr('transform', 'translate(0,' + height + ')')
				.call(xAxis);

			this.toolbox.log('Add the Y Axis');
			svg.append('g')
				.attr('class', 'y axis')
				.call(yAxis);

			this.toolbox.log('Add the valueline path');
			svg.append('path')
				.attr('class', 'line')
				.attr('d', valueline(data));

			this.toolbox.log('Add the scatterplot');
			svg.selectAll('dot')
				.data(data)
				.enter().append('circle')
				.attr('r', 5)
				.attr('cx', (d) => x(d.date))
				.attr('cy', (d) => y(d.value))
				.on('mouseover', (d) => {
					console.log('mouseover', 'd=' + d + ' div=' + div);
					div.transition()
						.duration(200)
						.style('opacity', .9);
					div.html(printTime(d.date) + '<br/>' + d.value)
						.style('left', (d3.event.pageX) + 'px')
						.style('top', (d3.event.pageY - 28) + 'px');
				})
				.on('mouseout', (d) => {
					console.log('mouseout', 'd=' + d + ' div=' + div);
					div.transition()
						.duration(500)
						.style('opacity', 0);
				});
		});
	}
}
