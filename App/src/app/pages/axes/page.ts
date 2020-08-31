import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScalesPage } from '../scales/page';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';

import * as d3Axis from 'd3-axis';
import { Axis } from 'd3-axis';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-axes',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})

export class AxesPage implements OnInit {
	public ID = 'AxesPage';

	private toolbox = new Toolbox(this.ID);

	scalePage = ScalesPage;
	xAxis: Axis<any>;

	constructor(public router: Router, private elementRef: ElementRef) {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('constructor');

		this.createAxis();
		this.createSVG();
		this.createOtherAxis();
	}

	createAxis(): void {
		const axisScale = d3Scale
			.scaleLinear()
			.domain([0, 100])
			.range([0, 300]);

		this.xAxis = d3Axis.axisBottom(axisScale);
	}

	createSVG(): void {
		const svgContainer = d3.select('#axis-svg').append('svg')
			.attr('width', 300)
			.attr('height', 100);

		svgContainer.append('g')
			.call(this.xAxis);
	}

	createOtherAxis(): void {
		this.elementRef.nativeElement.querySelectorAll('.svg-axis').forEach((container) => {

			const config = JSON.parse(container.getAttribute('data-config'));

			const svgContainer = d3.select('#' + container.id).append('svg')
				.attr('width', config.width)
				.attr('height', config.height);

			const axisScale = d3Scale
				.scaleLinear()
				.domain(config.domain)
				.range(config.range);

			const axisGroup = svgContainer.append('g');

			let axis: Axis<any>;
			let translateValue = [0, 0];
			switch (config.axisPosition) {
				case 'top':
					axis = d3Axis.axisTop(axisScale);
					translateValue = [0, 20];
					break;
				case 'left':
					axis = d3Axis.axisLeft(axisScale);
					translateValue = [20, 0];
					break;
				case 'right':
					axis = d3Axis.axisRight(axisScale);
					break;
				default:
					axis = d3Axis.axisBottom(axisScale);
					break;
			}

			axisGroup.call(axis);

			axisGroup.attr('transform', 'translate(' + translateValue.join() + ')');
		});
	}
}
