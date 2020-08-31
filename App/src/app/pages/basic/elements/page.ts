import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-basic-elements',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class BasicElementsPage implements OnInit {
	public ID = 'BasicElementsPage';

	private toolbox = new Toolbox(this.ID);

	constructor() {
		this.toolbox.log('constructor', 'd3=' + d3.version);
		this.toolbox.log('constructor', 'd3=' + JSON.stringify(d3));
	}

	ngOnInit() {
		this.createCircles();
		this.createCoordinateCircles();
	}

	createCircles(): void {
		const circleRadii = [40, 20, 10];

		const svgContainer = d3.select('#circles-basic').append('svg')
			.attr('width', 300)
			.attr('height', 100)
			.style('border', '1px solid black');

		const circles = svgContainer
			.selectAll('circle')
			.data(circleRadii)
			.enter()
			.append('circle');

		circles
			.attr('cx', 50)
			.attr('cy', 50)
			.attr('r', (d) => d)
			.style('fill', (d) => {
				let returnColor;
				if (d === 40) {
					returnColor = 'green';
				} else if (d === 20) { returnColor = 'purple'; } else if (d === 10) { returnColor = 'red'; }
				return returnColor;
			});

	}

	createCoordinateCircles(): void {
		const spaceCircles = [30, 70, 110];

		const svgContainer = d3.select('#coordinateCircles').append('svg')
			.attr('width', 300)
			.attr('height', 200)
			.style('border', '1px solid black');

		const circles = svgContainer.selectAll('circle')
			.data(spaceCircles)
			.enter()
			.append('circle');

		circles
			.attr('cx', (d) => d)
			.attr('cy', (d) => d)
			.attr('r', 20)
			.style('fill', (d) => {
				let returnColor;
				if (d === 30) {
					returnColor = 'green';
				} else if (d === 70) { returnColor = 'purple'; } else if (d === 110) { returnColor = 'red'; }
				return returnColor;
			});

	}
}
