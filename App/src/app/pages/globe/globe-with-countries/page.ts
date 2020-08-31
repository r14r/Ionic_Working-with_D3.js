import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';

import * as topojson from 'topojson-client';
import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'app-globe-with-countries',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class GlobeWithCountriesPage implements OnInit {
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
		this.toolbox.log('demo');

		this.width = 600;
		this.height = 500;
		this.sens = 0.25;

		this.projection = d3
			.geoOrthographic()
			.scale(245)
			.rotate([0, 0])
			.translate([this.width / 2, this.height / 2])
			.clipAngle(90);

		this.path = d3
			.geoPath()
			.projection(this.projection);

		this.svg = d3
			.select('body')
			.append('svg')
			.attr('width', this.width)
			.attr('height', this.height);

		this.svg
			.append('path')
			.datum({ type: 'Sphere' })
			.attr('class', 'water')
			.attr('d', this.path);

		this.countryTooltip = d3.
			select('body')
			.append('div')
			.attr('class', 'countryTooltip');
		this.countryList = d3
			.select('body')
			.append('select')
			.attr('name', 'countries');


		d3.queue()
			.defer(d3.json, '/assets/data/world-110m.json')
			.defer(d3.tsv, '/assets/data/world-110m-country-names.tsv')
			.await(this.ready);

	}

	ready(error, world, countryData) {
		this.toolbox.log('ready');

		this.countryById = {};
		this.countries = topojson.feature(world, world.objects.countries).features;

		// tslint:disable-next-line: space-before-function-paren
		countryData.forEach(function (d) {
			this.countryById[d.id] = d.name;

			this.countryList
				.append('option')
				.text(d.name)
				.property('value', d.id);
		});

		this.world = this.svg.selectAll('path.land')
			.data(this.countries)
			.enter().append('path')
			.attr('class', 'land')
			.attr('d', this.path)

			.call(d3.drag.drag()
				.origin(() => {
					const r = this.projection.rotate();
					return { x: r[0] / this.sens, y: -r[1] / this.sens };
				})
				.on('drag', () => {
					const rotate = this.projection.rotate();

					this.projection.rotate([d3.event.x * this.sens, -d3.event.y * this.sens, rotate[2]]);
					this.svg.selectAll('path.land').attr('d', this.path);
					this.svg.selectAll('.focused').classed('focused', this.focused = false);
				}))

			// Mouse events
			.on('mouseover', (d) => {
				this.countryTooltip.text(this.countryById[d.id])
					.style('left', (d3.event.pageX + 7) + 'px')
					.style('top', (d3.event.pageY - 15) + 'px')
					.style('display', 'block')
					.style('opacity', 1);
			})
			.on('mouseout', (d) => {
				this.countryTooltip.style('opacity', 0)
					.style('display', 'none');
			})
			.on('mousemove', (d) => {
				this.countryTooltip.style('left', (d3.event.pageX + 7) + 'px')
					.style('top', (d3.event.pageY - 15) + 'px');
			});

		// Country focus on option select
		d3.select('select').on('change', () => {
			const rotate = this.projection.rotate();
			const focusedCountry = this.country(this.countries, this);
			const p = d3.geoCentroid(focusedCountry);

			this.svg.selectAll('.focused').classed('focused', this.focused = false);

			(function transition() {
				d3.transition()
					.duration(2500)
					.tween('rotate', () => {
						const r = d3.interpolate(this.projection.rotate(), [-p[0], -p[1]]);

						return (t) => {
							this.projection.rotate(r(t));
							this.svg.selectAll('path').attr('d', this.path)
								.classed('focused', (d, i) => {
									// tslint:disable-next-line: triple-equals
									return d.id == focusedCountry.id ? this.focused = d : false;
								});
						};
					});
			})();
		});
	}

	country(cnt, sel) {
		for (let i = 0, l = cnt.length; i < l; i++) {
			// tslint:disable-next-line: triple-equals
			if (cnt[i].id == sel.value) { return cnt[i]; }
		}
	}

}
