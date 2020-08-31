import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-real-time-data-basic',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})

export class RealTimeDataBasicPage implements OnInit {
	public ID = 'RealTimeDataBasicPage';

	private toolbox = new Toolbox(this.ID);

	private svg: any;
	private scaleX;
	private scaleY;

	constructor(public router: Router, private elementRef: ElementRef) {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('constructor');

	}

	demo1() {
		this.toolbox.log('demo1');

		const playground = d3.select('#playground');
		this.toolbox.log('demo1', 'playground = ' + JSON.stringify(playground));
		this.toolbox.log('demo1', 'playground = ' + typeof (playground));

		const limit = 60 * 1;
		const duration = 1000;

		const width = 500;
		const height = 200;

		const current = {
			value: 0,
			data: d3.range(limit).map(() => 0)
		};

		let now = Number(new Date(Date.now() - duration));

		const x = d3
			.scaleTime()
			.domain([now - (limit - 2), now - duration])
			.range([0, width]);
		const y = d3
			.scaleLinear()
			.domain([-100, 100])
			.range([height, 0]);
		const line = d3
			.line()
			.x((d, i) => x(now - (limit - 1 - i) * duration))
			.y((d) => y(d))
			.curve(d3.curveBasis);

		const svg = d3
			.select('.graph')
			.append('svg')
			.attr('class', 'chart')
			.attr('width', width)
			.attr('height', height + 50);

		const xAxis = svg
			.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0,' + y(0) + ')')
			.call((x.axis = d3.axisBottom().scale(x)));

		const yAxis = svg
			.append('g')
			.attr('class', 'y axis')
			.attr('transform', 'translate(20,0)')
			.call(
				d3
					.axisLeft()
					.scale(y)
					.ticks(20)
			);
		const currentPath = svg
			.append('g')
			.append('path')
			.data([current.data])
			.style('fill', 'transparent')
			.style('stroke', 'red');

		function tick() {
			now = Number(new Date());

			// group.data.push(group.value) // Real values arrive at irregular intervals
			current.data.push(getRandomArbitrary(-100, 100));

			currentPath.attr('d', line);

			// Shift domain
			x.domain([now - (limit - 2) * duration, now - duration]);

			// Slide x-axis left
			xAxis
				.transition()
				.duration(duration)
				.ease(d3.easeLinear, 2)
				.call(x.axis);

			// Slide path left
			currentPath
				.attr('transform', null)
				.transition()
				.duration(duration)
				.ease(d3.easeLinear, 2)
				.attr('transform', 'translate(' + x(now - (limit - 1) * duration) + ')')
				.on('end', tick);

			// Remove oldest data point from each group
			current.data.shift();
		}
		function getRandomArbitrary(min, max) {
			return Math.random() * (max - min) + min;
		}
		tick();
	}

}
