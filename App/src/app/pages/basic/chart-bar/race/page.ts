
/*
 https://observablehq.com/d/bef0441bd98d59a7
*/

import { Component, OnInit, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Axis from 'd3-axis';
import * as d3Interpolate from 'd3-interpolate';
import * as d3Array from 'd3-array';
import * as d3Timer from 'd3-timer';
import * as d3Format from 'd3-format';
import * as d3Ease from 'd3-ease';
import * as d3Color from 'd3-color';
import * as d3Fetch from 'd3-fetch';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

export class DataModel {
	name: string;
}

@Component({
	selector: 'page-basic-shapes',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class BarChartRacePage implements OnInit, OnDestroy {
	public ID = 'BarChartRacePage';

	private toolbox = new Toolbox(this.ID);

	//
	//
	brandData = [];

	ticker: any;

	constructor(private http: HttpClient) {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.getChartData().then((data) => {
			this.brandData = data;
			this.createChart();
		});
	}

	ngOnDestroy() {
		this.ticker.stop();
	}

	halo(text, strokeWidth) {
		// tslint:disable-next-line: space-before-function-paren
		text.select(function () {
			return this.parentNode.insertBefore(this.cloneNode(true), this);
		})
			.style('fill', '#ffffff')
			.style('stroke', '#ffffff')
			.style('stroke-width', strokeWidth)
			.style('stroke-linejoin', 'round')
			.style('opacity', 1);
	}

	extractData(data) {
		this.toolbox.log('extractData', 'data = ' + data);
		this.brandData = data;
	}

	handleError(err) {
		this.toolbox.log('handleError', 'err = ' + JSON.stringify(err));
	}

	async getChartData(): Promise<any[]> {
		this.toolbox.log('initChartData');
		/*
		const ROOT = 'https://gist.githubusercontent.com/johnburnmurdoch';
		const GIST = '2e5712cce1e2a9407bf081a952b85bac/raw/08cf82f5e03c619f7da2700d1777da0b5247df18';
		const FILE = 'INTERBRAND_brand_values_2000_2018_decimalised.csv';
		*/

		const ROOT = '/assets';
		const GIST = 'data';
		const FILE = 'brands.csv';

		const URL = ROOT + '/' + GIST + '/' + FILE;

		return d3Fetch.csv(URL);


		if (false) {
			await this.http
				.get<any[]> /* <DataModel[]> */(URL)
				.subscribe(
					data => {
						this.brandData = data;
						this.toolbox.log('initChartData', 'subscribe: data = ' + JSON.stringify(data));
					},
					error => {
						this.toolbox.log('initChartData', 'subscribe: error = ' + JSON.stringify(error));
						this.handleError(error);
					});
		}
		this.toolbox.log('initChartData', 'done: brandData = ' + this.brandData);
	}

	createChart(): void {
		this.toolbox.log('createChart');

		const tickDuration = 333;
		const topN = 12;

		const height = 800;
		const width = 800;

		const svg = d3.select('#bar-chart-race').append('svg')
			.attr('width', height)
			.attr('height', width)
			.style('border', '1px solid black');

		this.toolbox.log('createChart', 'svg = ' + svg);

		const margin = { top: 80, right: 0, bottom: 5, left: 0 };
		const barPadding = (height - (margin.bottom + margin.top)) / (topN * 5);

		const title = svg.append('text')
			.attr('class', 'title')
			.attr('y', 40)
			.html('18 years of Interbrand’s Top Global Brands');

		const subTitle = svg.append('text')
			.attr('class', 'subTitle')
			.attr('y', 20)
			.html('Brand value, $m');

		const caption = svg.append('text')
			.attr('class', 'caption')
			.attr('x', width)
			.attr('y', height - 5)
			.style('text-anchor', 'end')
			.html('Source: Interbrand');

		let year = 2000;

		this.brandData.forEach(d => {
			d.value = +d.value;
			d.lastValue = +d.lastValue;
			d.value = isNaN(d.value) ? 0 : d.value;
			d.year = +d.year;
			d.colour = d3Color.hsl(Math.random() * 360, 0.75, 0.75);
		});

		// tslint:disable-next-line: triple-equals
		let yearSlice = this.brandData.filter(d => d.year == year && !isNaN(d.value))
			.sort((a, b) => b.value - a.value)
			.slice(0, topN);

		yearSlice.forEach((d, i) => d.rank = i);

		this.toolbox.log('createChart', 'yearSlice for year ' + year);
		console.table(yearSlice);

		const x = d3Scale.scaleLinear()
			.domain([0, d3Array.max(yearSlice, d => d.value)])
			.range([margin.left, width - margin.right - 65]);

		const y = d3Scale.scaleLinear()
			.domain([topN, 0])
			.range([height - margin.bottom, margin.top]);

		const xAxis = d3Axis.axisTop()
			.scale(x)
			.ticks(width > 500 ? 5 : 2)
			.tickSize(-(height - margin.top - margin.bottom))
			.tickFormat(d => d3Format.format(',')(d));

		svg.append('g')
			.attr('class', 'axis xAxis')
			.attr('transform', `translate(0, ${margin.top})`)
			.call(xAxis)
			.selectAll('.tick line')
			.classed('origin', d => d === 0);

		svg.selectAll('rect.bar')
			.data(yearSlice, d => d.name)
			.enter()
			.append('rect')
			.attr('class', 'bar')
			.attr('x', x(0) + 1)
			.attr('width', d => x(d.value) - x(0) - 1)
			.attr('y', d => y(d.rank) + 5)
			.attr('height', y(1) - y(0) - barPadding)
			.style('fill', d => d.colour);

		svg.selectAll('text.label')
			.data(yearSlice, d => d.name)
			.enter()
			.append('text')
			.attr('class', 'label')
			.attr('x', d => x(d.value) - 8)
			.attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
			.attr('text-anchor', 'end')
			.html(d => d.name);

		svg.selectAll('text.valueLabel')
			.data(yearSlice, d => d.name)
			.enter()
			.append('text')
			.attr('class', 'valueLabel')
			.attr('x', d => x(d.value) + 5)
			.attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
			.text(d => d3Format.format(',.0f')(d.lastValue));

		const yearText = svg.append('text')
			.attr('class', 'yearText')
			.attr('x', width - margin.right)
			.attr('y', height - 25)
			.style('text-anchor', 'end')
			.html(year)
			// 	.call(this.halo, 10)
			;


		/*-----------------------------------------------------------------------------------------
		**
		**
		**---------------------------------------------------------------------------------------*/
		this.ticker = d3Timer.interval(e => {

			this.toolbox.log('createChart:ticker', '*** yearSlice for year = ' + year);
			// tslint:disable-next-line: triple-equals
			yearSlice = this.brandData.filter(d => d.year == year && !isNaN(d.value))
				.sort((a, b) => b.value - a.value)
				.slice(0, topN);

			yearSlice.forEach((d, i) => d.rank = i);

			x.domain([0, d3Array.max(yearSlice, d => d.value)]);

			this.toolbox.log('createChart:ticker', 'select xAxis');
			/*
			svg.select('.xAxis')
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.call(xAxis);
			*/

			const bars = svg.selectAll('.bar').data(yearSlice, d => d.name);

			this.toolbox.log('createChart:ticker', 'bars enter');
			bars
				.enter()
				.append('rect')
				.attr('class', d => `bar ${d.name.replace(/\s/g, '_')}`)
				.attr('x', x(0) + 1)
				.attr('width', d => x(d.value) - x(0) - 1)
				.attr('y', d => y(topN + 1) + 5)
				.attr('height', y(1) - y(0) - barPadding)
				.style('fill', d => d.colour)
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.attr('y', d => y(d.rank) + 5);

			this.toolbox.log('createChart:ticker', 'bars transistion');
			bars
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.attr('width', d => x(d.value) - x(0) - 1)
				.attr('y', d => y(d.rank) + 5);

			this.toolbox.log('createChart:ticker', 'bars exit');
			bars
				.exit()
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.attr('width', d => x(d.value) - x(0) - 1)
				.attr('y', d => y(topN + 1) + 5)
				.remove();

			const labels = svg.selectAll('.label').data(yearSlice, d => d.name);

			this.toolbox.log('createChart:ticker', 'labels enter');
			labels
				.enter()
				.append('text')
				.attr('class', 'label')
				.attr('x', d => x(d.value) - 8)
				.attr('y', d => y(topN + 1) + 5 + ((y(1) - y(0)) / 2))
				.attr('text-anchor', 'end')
				.html(d => d.name)
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);

			this.toolbox.log('createChart:ticker', 'labels transition');
			labels
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.attr('x', d => x(d.value) - 8)
				.attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);

			this.toolbox.log('createChart:ticker', 'labels exit');
			labels
				.exit()
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.attr('x', d => x(d.value) - 8)
				.attr('y', d => y(topN + 1) + 5)
				.remove();

			const valueLabels = svg.selectAll('.valueLabel').data(yearSlice, d => d.name);

			this.toolbox.log('createChart:ticker', 'valueLabels enter');
			valueLabels
				.enter()
				.append('text')
				.attr('class', 'valueLabel')
				.attr('x', d => x(d.value) + 5)
				.attr('y', d => y(topN + 1) + 5)
				.text(d => d3Format.format(',.0f')(d.lastValue))
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1);

			valueLabels
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.attr('x', d => x(d.value) + 5)
				.attr('y', d => y(d.rank) + 5 + ((y(1) - y(0)) / 2) + 1)
				.tween('text', (d) => {
					const i = d3Interpolate.interpolateRound(d.lastValue, d.value);
					// tslint:disable-next-line: space-before-function-paren
					return function (t) {
						this.textContent = d3Format.format(',')(i(t));
					};
				});

			valueLabels
				.exit()
				.transition()
				.duration(tickDuration)
				.ease(d3Ease.easeLinear)
				.attr('x', d => x(d.value) + 5)
				.attr('y', d => y(topN + 1) + 5)
				.remove();

			yearText.html(year);

			if (year === 2003) {
				this.ticker.stop();
			}

			year = d3Format.format('.1f')((+year) + 0.1);
		}, tickDuration);

		return svg.node();
	}
}
