import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-scales',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class ScalesPage implements OnInit {
	public ID = 'ScalesPage';

	private toolbox = new Toolbox(this.ID);

	initialDataToScale: number[];
	scaledData: number[] = [];

	isPushed = false;

	constructor(public router: Router, public activatedRoute: ActivatedRoute) {
		this.isPushed = (this.activatedRoute.snapshot.paramMap.get('isPushed') === 'yes') || false;
	}

	ngOnInit() {
		this.createScales();
	}

	createScales(): void {

		this.initialDataToScale = [0, 1000, 3000, 2000, 5000, 4000, 7000, 6000, 9000, 8000, 10000];

		const linearScale = d3Scale
			// Constructs a new continuous linear scale with
			// the unit domain [0, 1], the unit range [0, 1],
			// the default interpolator and clamping disabled
			.scaleLinear()
			// Sets the scale’s domain to the specified array of numbers.
			.domain([
				d3Array.min(this.initialDataToScale),
				d3Array.max(this.initialDataToScale)
			])
			// Sets the scale’s range to the specified array of values
			.range([0, 100]);

		this.scaledData = this.initialDataToScale.map((data) => linearScale(data));

	}

}
