import { Component, OnInit, OnDestroy } from '@angular/core';

import * as d3 from 'd3-selection';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-basic-shapes',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class UsingJSONPage implements OnInit, OnDestroy {
	public ID = 'UsingJSONPage';
	private toolbox = new Toolbox(this.ID);

	constructor() {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');
		this.main();
	}

	ngOnDestroy() {
	}

	main() {
		const jsonRectangles = [
			{ x_axis: 10, y_axis: 10, height: 20, width: 20, color: 'green' },
			{ x_axis: 40, y_axis: 40, height: 20, width: 20, color: 'purple' },
			{ x_axis: 70, y_axis: 70, height: 20, width: 20, color: 'red' },
			{ x_axis: 360, y_axis: 40, height: 20, width: 20, color: 'purple' }
		];

		const jsonCircles = [
			{ x_axis: 30, y_axis: 30, radius: 20, color: 'green' },
			{ x_axis: 70, y_axis: 70, radius: 20, color: 'purple' },
			{ x_axis: 110, y_axis: 100, radius: 20, color: 'red' }];

		const svg = d3.select('#playground')
			.append('svg')
			.attr('width', 200)
			.attr('height', 200)
			.classed('svg-container', true);

		const circles = svg.selectAll('circle')
			.data(jsonCircles)
			.enter()
			.append('circle');

		// tslint:disable: arrow-return-shorthand
		const circleAttributes = circles
			.attr('cx', (d) => { return d.x_axis; })
			.attr('cy', (d) => { return d.y_axis; })
			.attr('r', (d) => { return d.radius; })
			.style('fill', (d) => { return d.color; });

	}
}
