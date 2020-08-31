import { Component, AfterViewInit, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import * as d3Format from 'd3-format';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-tooltips-grid',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class TooltipsGridPage implements OnInit {
	public ID = 'TooltipsPage';
	private toolbox = new Toolbox(this.ID);

	constructor() {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.demo();
	}

	demo() {
		this.toolbox.log('demo');

		const margin = { top: 20, right: 25, bottom: 30, left: 40 };
		const width = 450 - margin.left - margin.right;
		const height = 450 - margin.top - margin.bottom;

		//
		// append the svg object to the body of the page
		//
		const svg = d3.select('#playground')
			.append('svg')
			.attr('width', width + margin.left + margin.right)
			.attr('height', height + margin.top + margin.bottom)
			.append('g')
			.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

		//
		//
		//
		this.toolbox.log('read csv data');
		d3.csv('/assets/data/heatmap.csv', (data) => {
			// Labels of row and columns -> unique identifier of the column called 'group' and 'variable'
			const myGroups = d3.map(data, (d) => d.group).keys();
			const myVars = d3.map(data, (d) => d.variable).keys();

			// Build X scales and axis:
			const x = d3.scaleBand()
				.range([0, width])
				.domain(myGroups)
				.padding(0.05);

			svg.append('g')
				.style('font-size', 15)
				.attr('transform', 'translate(0,' + height + ')')
				.call(d3.axisBottom(x).tickSize(0))
				.select('.domain').remove();

			// Build Y scales and axis:
			const y = d3.scaleBand()
				.range([height, 0])
				.domain(myVars)
				.padding(0.05);

			svg.append('g')
				.style('font-size', 15)
				.call(d3.axisLeft(y).tickSize(0))
				.select('.domain').remove();

			// Build color scale
			const myColor = d3.scaleSequential()
				.interpolator(d3.interpolateInferno)
				.domain([1, 100]);

			// create a tooltip
			const Tooltip = d3.select('#playground')
				.append('div')
				.style('opacity', 0)
				.attr('class', 'tooltip')
				.style('background-color', 'white')
				.style('border', 'solid')
				.style('border-width', '2px')
				.style('border-radius', '5px')
				.style('padding', '5px');

			// Three function that change the tooltip when user hover / move / leave a cell
			const mouseover = (d, i) => {
				this.toolbox.log('mouseover', 'd = ' + JSON.stringify(d) + ' i = ' + JSON.stringify(i));

				try {
					Tooltip
						.style('opacity', 1);
				} catch (error) {
					this.toolbox.log('mousemove', 'tooltip error ' + error);
				}

				try {
					d3.select(this)
						.style('stroke', 'black')
						.style('opacity', 1);
				} catch (error) {
					this.toolbox.log('mousemove', 'd3.select error ' + error);
				}
			};

			const mousemove = (d, i) => {
				const mouse = d3.mouse(d3.event.currentTarget);
				const posX = mouse[0];
				const posY = mouse[1];

				this.toolbox.log('mousemove', 'd = ' + JSON.stringify(d) + ' i = ' + JSON.stringify(i) + ' mouse = ' + JSON.stringify(mouse) + ' posx=' + posX + ' posy=' + posY);

				try {
					Tooltip
						.html('The exact value of<br>this cell is: ' + d.value)
						.style('left', (posX + 70) + 'px')
						.style('top', posY + 'px');
				} catch (error) {
					this.toolbox.log('mousemove', 'tooltip error ' + error);
				}
			};

			const mouseleave = (d, i) => {
				this.toolbox.log('mouseover', 'd = ' + JSON.stringify(d) + ' i = ' + JSON.stringify(i));

				try {
					Tooltip
						.style('opacity', 0);
				} catch (error) {
					this.toolbox.log('mousemove', 'tooltip error ' + error);
				}

				try {
					d3.select(this)
						.style('stroke', 'none')
						.style('opacity', 0.8);
				} catch (error) {
					this.toolbox.log('mousemove', 'd3.select error ' + error);
				}
			};

			svg.selectAll()
				.data(data, (d) => d.group + ':' + d.variable)
				.enter()
				.append('rect')
				.attr('x', (d) => x(d.group))
				.attr('y', (d) => y(d.variable))
				.attr('rx', 4)
				.attr('ry', 4)
				.attr('width', x.bandwidth())
				.attr('height', y.bandwidth())
				.style('fill', (d) => myColor(d.value))
				.style('stroke-width', 4)
				.style('stroke', 'none')
				.style('opacity', 0.8)
				.on('mouseover', mouseover)
				.on('mousemove', mousemove)
				.on('mouseleave', mouseleave);
		});
	}
}
