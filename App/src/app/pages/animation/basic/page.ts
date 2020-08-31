import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-animation',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})

export class AnimationPage implements OnInit {
	public ID = 'AnimationPage';

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

	demo1_init() {
		this.toolbox.log('demo1_init');
	}

	demo1() {
		this.toolbox.log('demo1');

		const playground = d3.select('#playground1');
		this.toolbox.log('demo1', 'playground = ' + JSON.stringify(playground));
		this.toolbox.log('demo1', 'playground = ' + typeof (playground));

		playground
			// .transition()
			// .duration(2000)
			.attr('width', '400');
	}

	demo1_set_background() {
		this.toolbox.log('demo1_set_background');

		const svg = d3.select('#svg');
		this.toolbox.log('demo1_set_background', 'svg = ' + svg);

		svg
			.transition()
			.style('color', 'red');
	}

	demo2() {
		d3.select('#playground2')
			.transition()
			.delay(100)
			.duration(2000)
			.attr('width', '400');
	}

	demo3() {
		d3.select('#playground3')

			// First, make the bar wider
			.transition()
			.duration(2000)
			.attr('width', '400')

			// Second, higher
			.transition()
			.attr('height', '100')

			// Change its color
			.transition()
			.style('fill', 'red')

			// And now very small
			.transition()
			.duration(200)
			.attr('height', '10')
			.attr('width', '10');
	}

	demo4_init() {
		const position = [50, 100, 150, 200, 250, 300, 350];

		// Add circles at the top
		d3.select('#dataviz_delay')
			.selectAll('mycircles')
			.data(position)
			.enter()
			.append('circle')
			.attr('cx', d => d)
			.attr('cy', 40)
			.attr('r', 10);
	}
	// Animation: put them down one by one:
	demo4() {
		d3.selectAll('circle')
			.transition()
			.duration(2000)
			.attr('cy', 300)
			.delay(i => i * 10);
	}

	demo5_init() {
		this.svg = d3.select('#svgAxisTransition');

		// Create the scale
		this.scaleX = d3Scale.scaleLinear()
			.domain([0, 100])         // This is what is written on the Axis: from 0 to 100
			.range([10, 400]);       // This is where the axis is placed: from 100 px to 800px

		// Draw the axis
		this.svg.append('g')
			.attr('transform', 'translate(0,200)')      // This controls the vertical position of the Axis
			.call(d3Axis.axisBottom(this.scaleX))
			.attr('class', 'myAxis');                    // Give a class to this element: we'll have to call it later
	}
	demo5() {
		// Change the scale of the axis
		this.scaleX.domain([0, 1000]);

		// Update the axis
		this.svg.select('.myAxis')
			.transition()
			.duration(3000)
			.call(d3Axis.axisBottom(this.scaleX));

	}

}
