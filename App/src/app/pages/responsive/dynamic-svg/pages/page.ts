import { Component, OnInit, OnDestroy } from '@angular/core';

import * as d3 from 'd3-selection';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-basic-shapes',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class DynamicSVGPage implements OnInit, OnDestroy {
	public ID = 'DynamicSVGPage';
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

		let maxX = 0;
		let maxY = 0;

		let tempX = 0;
		let tempY = 0;

		for (let i = 0; i < jsonRectangles.length; i++) {

			tempX = jsonRectangles[i].x_axis + jsonRectangles[i].width;
			tempY = jsonRectangles[i].y_axis + jsonRectangles[i].height;

			if (tempX >= maxX) { maxX = tempX; }
			if (tempY >= maxY) { maxY = tempY; }
		}

		const svg = d3.select('#playground')
			.append('svg')
			.attr('width', maxX)
			.attr('height', maxY)
			.classed('svg-container', true);

		const rectangles = svg.selectAll('rect')
			.data(jsonRectangles)
			.enter()
			.append('rect');

		// tslint:disable: arrow-return-shorthand
		const rectangleAttributes = rectangles
			.attr('x', (d) => { return d.x_axis; })
			.attr('y', (d) => { return d.y_axis; })
			.attr('height', (d) => { return d.height; })
			.attr('width', (d) => { return d.width; })
			.style('fill', (d) => { return d.color; });

	}
}
