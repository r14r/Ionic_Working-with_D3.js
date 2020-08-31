import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'app-rotation-globe-with-marker',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class RotationGlobeWithMarkerPage implements OnInit {
	private ID = 'RotationGlobeWithMarkerPage';
	private toolbox = new Toolbox(this.ID);

	svg: any;

	markerGroup: any;
	projection: any;
	initialScale: any;
	path: any;


	config = {
		speed: 0.005, verticalTilt: -30, horizontalTilt: 0
	};

	width: number;
	height: number;
	center: [number, number];
	locations = [];

	constructor() {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.demo();
	}

	demo() {
		this.toolbox.log('demo');

		this.width = 960;
		this.height = 500;
		this.center = [this.width / 2, this.height / 2];
		this.locations = [];

		this.svg = d3.select('svg').attr('width', this.width).attr('height', this.height);
		this.markerGroup = this.svg.append('g');
		this.projection = d3.geoOrthographic();
		this.initialScale = this.projection.scale();
		this.path = d3.geoPath().projection(this.projection);


		this.drawGlobe();
		this.drawGraticule();
		this.enableRotation();
	}

	drawGlobe() {
		this.toolbox.log('drawGlobe');

		d3.queue()
			.defer(d3.json, '/assets/data/rotation-globe-with-marker/world-110m.json')
			.defer(d3.json, '/assets/data/rotation-globe-with-marker/locations.json')
			.await((error, worldData, locationData) => {
				this.svg.selectAll('.segment')
					.data(topojson.feature(worldData, worldData.objects.countries).features)
					.enter().append('path')
					.attr('class', 'segment')
					.attr('d', this.path)
					.style('stroke', '#888')
					.style('stroke-width', '1px')
					.style('fill', (d, i) => '#e5e5e5')
					.style('opacity', '.6');
				this.locations = locationData;
				this.drawMarkers();
			});
	}

	drawGraticule() {
		this.toolbox.log('drawGraticule');

		const graticule = d3.geoGraticule()
			.step([10, 10]);

		this.svg.append('path')
			.datum(graticule)
			.attr('class', 'graticule')
			.attr('d', this.path)
			.style('fill', '#fff')
			.style('stroke', '#ccc');
	}

	drawMarkers() {
		// this.toolbox.log('drawMarkers');

		const markers = this.markerGroup.selectAll('circle').data(this.locations);

		markers
			.enter()
			.append('circle')
			.merge(markers)
			.attr('cx', d => this.projection([d.longitude, d.latitude])[0])
			.attr('cy', d => this.projection([d.longitude, d.latitude])[1])
			.attr('fill', d => {
				const coordinate = [d.longitude, d.latitude];
				const gdistance = d3.geoDistance(coordinate, this.projection.invert(this.center));
				return gdistance > 1.57 ? 'none' : 'steelblue';
			})
			.attr('r', 7);

		// tslint:disable-next-line: space-before-function-paren
		this.markerGroup.each(function () {
			this.parentNode.appendChild(this);
		});
	}

	enableRotation() {
		this.toolbox.log('enableRotation');

		d3.timer((elapsed) => {
			this.projection.rotate([this.config.speed * elapsed - 120, this.config.verticalTilt, this.config.horizontalTilt]);
			this.svg.selectAll('path').attr('d', this.path);
			this.drawMarkers();
		});
	}


}
