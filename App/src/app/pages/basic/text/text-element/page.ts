import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import * as d3 from 'd3-selection';
import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-text-element',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class TextElementPage implements OnInit {
	public ID = 'TextElementPage';

	private toolbox = new Toolbox(this.ID);

	constructor(public router: Router, public avtivatedRouters: ActivatedRoute) {
	}

	ngOnInit() {
		this.createSVG();
	}

	createSVG(): void {

		// Data Set
		const circleData = [
			{ cx: 20, cy: 20, radius: 20, color: 'green' },
			{ cx: 70, cy: 70, radius: 20, color: 'purple' }];

		// SVG Viewport
		const svgContainer = d3.select('#svg-text').append('svg')
			.attr('width', 200)
			.attr('height', 200);

		// Add circles to the svgContainer
		const circles = svgContainer.selectAll('circle')
			.data(circleData)
			.enter()
			.append('circle');

		// Add the circle attributes
		circles
			.attr('cx', (d) => d.cx)
			.attr('cy', (d) => d.cy)
			.attr('r', (d) => d.radius)
			.style('fill', (d) => d.color);

		// Add the SVG Text Element to the svgContainer
		const text = svgContainer.selectAll('text')
			.data(circleData)
			.enter()
			.append('text');

		// Add the text attributes
		text
			.attr('x', (d) => d.cx)
			.attr('y', (d) => d.cy)
			.text((d) => '( ' + d.cx + ', ' + d.cy + ' )')
			.attr('font-family', 'sans-serif')
			.attr('font-size', '20px')
			.attr('fill', 'red');
	}

}
