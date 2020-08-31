import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';
import * as topojson from 'topojson-client';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'app-globe-with-countries',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
	encapsulation: ViewEncapsulation.None
})
export class GlobeCenterOnClickPage implements OnInit {
	private ID = 'GlobeCenterOnClickPage';
	private toolbox = new Toolbox(this.ID);

	constructor() {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.demo();
	}

	demo() {
		this.toolbox.log('demo');

		d3.queue()
			.defer(d3.json, '/assets/data/center-on-click/world-110m.json')
			.defer(d3.tsv, '/assets/data/center-on-click/world-country-names.tsv')
			.await(this.ready);

		this.toolbox.log('demo', 'get data: done');
	}

	ready(error, world, names) {
		const toolbox = new Toolbox('GlobeCenterOnClickPage');

		toolbox.log('ready');

		if (error) { throw error; }

		const width = 950;
		const height = 700;

		//
		//
		const globe = { type: 'Sphere' };
		const land = topojson.feature(world, world.objects.land);
		const borders = topojson.mesh(world, world.objects.countries, (a, b) => a !== b);

		let countries = topojson.feature(world, world.objects.countries).features;

		toolbox.log('ready', 'land=' + Object.keys(land).length);
		toolbox.log('ready', 'borders=' + Object.keys(borders).length);
		toolbox.log('ready', 'countries=' + Object.keys(countries).length);

		countries = countries.filter((d) => {
			return names.some((n) => {
				// tslint:disable-next-line: triple-equals
				if (d.id == n.id) { return d.name = n.name; }
			});
		}).sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
		toolbox.log('ready', 'countries=' + Object.keys(countries).length);

		//
		//
		//

		const colors = { clickable: 'darkgrey', hover: 'grey', clicked: 'red', clickhover: 'darkred' };

		const projection = d3.geoOrthographic()
			.scale(300)
			.translate([width / 2, height / 2])
			.clipAngle(90)
			.precision(10);

		const path = d3.geoPath()
			.projection(projection);

		const graticule = d3.geoGraticule();

		const map = d3.select('#playground').append('svg')
			.attr('width', width)
			.attr('height', height)
			.attr('class', 'map');
		toolbox.log('ready', 'map=' + map);

		map.append('defs').append('path')
			.datum({ type: 'Sphere' })
			.attr('id', 'sphere')
			.attr('d', path);

		map.append('use')
			.attr('class', 'stroke')
			.attr('xlink:href', '#sphere');

		map.append('use')
			.attr('class', 'fill')
			.attr('xlink:href', '#sphere');

		map.append('path')
			.datum(graticule)
			.attr('class', 'graticule')
			.attr('d', path);

		map.insert('path', '.graticule')
			.datum(topojson.feature(world, world.objects.land))
			.attr('class', 'land')
			.attr('d', path);
		toolbox.log('ready', 'map=' + map);

		toolbox.log('ready', 'set names');
		for (const name of names) {
			for (const country of countries) {
				// tslint:disable-next-line: triple-equals
				if (country.id == name.id) {
					toolbox.log('demo', 'add country ' + country.name + '(' + country.id + ')');

					const item = map
						.insert('path', '.graticule')
						.datum(country)
						.attr('fill', colors.clickable)
						.attr('d', path)
						.attr('class', 'clickable')
						.attr('data-country-id', country.id);

					toolbox.log('demo', 'item=' + item);

					item
						.on('click', () => {
							toolbox.log('ready', 'click');
							d3.selectAll('.clicked').classed('clicked', false).attr('fill', colors.clickable);
							d3.select(this).classed('clicked', true).attr('fill', colors.clicked);

							d3.select('.clicked').transition()
								.duration(1250)
								.tween('rotate', () => {
									const p = d3.geoCentroid(countries[d3.select(this).attr('data-country-id')]),
										r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
									return (t) => {
										projection.rotate(r(t));
										map.selectAll('path').attr('d', path);
									};
								});
						})
						.on('mousemove', () => {
							const c = d3.select(this);
							toolbox.log('ready', 'mousemove c=' + JSON.stringify(c));

							if (c.classed('clicked')) {
								c.attr('fill', colors.clickhover);
							} else {
								c.attr('fill', colors.hover);
							}
						})
						.on('mouseout', () => {
							const c = d3.select(this);
							toolbox.log('ready', 'mouseout c=' + c);

							if (c.classed('clicked')) {
								c.attr('fill', colors.clicked);
							} else {
								d3.select(this).attr('fill', colors.clickable);
							}
						});
				}
			}
		}

		toolbox.log('demo', 'add countries');
		map.insert('path', '.graticule')
			.datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b))
			.attr('class', 'boundary')
			.attr('d', path);

		d3.select(self.frameElement).style('height', height + 'px');
	}
}
