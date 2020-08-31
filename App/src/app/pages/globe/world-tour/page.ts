import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

import * as topojson from 'topojson-client';
import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'app-globe-world-tour',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class GlobeWorldTourPage implements OnInit {
	private ID = 'GlobeWithCountriesPage';
	private toolbox = new Toolbox(this.ID);

	world: any;
	projection: any;
	path: any;
	svg: any;

	countryTooltip: any;

	countries: any;
	countryList: any;
	countryById: any;

	width;
	height;
	sens;
	focused;

	constructor() {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.demo();
	}

	demo() {

	}
}
