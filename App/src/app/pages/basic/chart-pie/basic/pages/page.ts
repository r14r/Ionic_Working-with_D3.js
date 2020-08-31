
/*
 https://observablehq.com/d/bef0441bd98d59a7
*/

import { Component, OnInit, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Fetch from 'd3-fetch';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

import { StatsPieChart } from '../data/data';

export class DataModel {
	name: string;
}

@Component({
	selector: 'page-basic-shapes',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class PieChartBasicPage implements OnInit, OnDestroy {
	public ID = 'PieChartBasicPage';

	private toolbox = new Toolbox(this.ID);

	title = 'D3 Barchart with Ionic 4';
	margin = { top: 20, right: 20, bottom: 30, left: 50 };
	width: number;
	height: number;
	radius: number;

	arc: any;
	labelArc: any;
	labelPer: any;
	pie: any;
	color: any;
	svg: any;

	//
	//
	brandData = [];

	ticker: any;

	constructor(private http: HttpClient) {
		this.toolbox.log('constructor');

		this.width = 900 - this.margin.left - this.margin.right;
		this.height = 500 - this.margin.top - this.margin.bottom;
		this.radius = Math.min(this.width, this.height) / 2;
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.initSvg();
		this.drawPie();

		this.getChartData().then((data) => {
			this.brandData = data;
			this.createChart();
		});
	}

	ngOnDestroy() {
	}

	async getChartData(): Promise<any[]> {
		this.toolbox.log('initChartData');

		const ROOT = '/assets';
		const GIST = 'data';
		const FILE = 'brands.csv';

		const URL = ROOT + '/' + GIST + '/' + FILE;

		return d3Fetch.csv(URL);
	}

	createChart() { }

	initSvg() {
		this.color = d3Scale.scaleOrdinal()
			.range(['#FFA500', '#00FF00', '#FF0000', '#6b486b', '#FF00FF', '#d0743c', '#00FA9A']);
		this.arc = d3Shape.arc()
			.outerRadius(this.radius - 10)
			.innerRadius(0);
		this.labelArc = d3Shape.arc()
			.outerRadius(this.radius - 40)
			.innerRadius(this.radius - 40);

		this.labelPer = d3Shape.arc()
			.outerRadius(this.radius - 80)
			.innerRadius(this.radius - 80);

		this.pie = d3Shape.pie()
			.sort(null)
			.value((d: any) => d.electionP);

		this.svg = d3.select('#pieChart')
			.append('svg')
			.attr('width', '100%')
			.attr('height', '100%')
			.attr('viewBox', '0 0 ' + Math.min(this.width, this.height) + ' ' + Math.min(this.width, this.height))
			.append('g')
			.attr('transform', 'translate(' + Math.min(this.width, this.height) / 2 + ',' + Math.min(this.width, this.height) / 2 + ')');
	}

	drawPie() {
		const g = this.svg.selectAll('.arc')
			.data(this.pie(StatsPieChart))
			.enter().append('g')
			.attr('class', 'arc');
		g.append('path').attr('d', this.arc)
			.style('fill', (d: any) => this.color(d.data.party));
		g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
			.attr('dy', '.35em')
			.text((d: any) => d.data.party);

		g.append('text').attr('transform', (d: any) => 'translate(' + this.labelPer.centroid(d) + ')')
			.attr('dy', '.35em')
			.text((d: any) => d.data.electionP + '%');
	}

}
