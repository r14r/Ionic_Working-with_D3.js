import { Component, OnInit, OnDestroy } from '@angular/core';

import * as d3 from 'd3-selection';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-basic-shapes',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class ViewboxPage implements OnInit, OnDestroy {
	public ID = 'ViewboxPage';
	private toolbox = new Toolbox(this.ID);

	constructor() {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');
		this.main();
	}

	ngOnDestroy() {
	}

	main() {
		const svg = d3.select('#playground')
			.append('svg')
			.attr('width', '100%')
			.attr('height', '100%')
			.classed('svg-container', true);

		d3.select(window).on('resize', () => {
			this.onResize();
		}).dispatch('resize');
	}

	onResize() {
		/*
		const multiplier = window.innerWidth / 2;
		d3.selectAll('svg').each(() => {
			const wh = d3.select(this).attr('ratio').split(' ');
			const w = parseInt(wh[0], 10) * multiplier;
			const h = parseInt(wh[1], 10) * multiplier;
			d3.select(this).attr('viewBox', '0 0 ' + w + ' ' + h);
		});

		svg.each(() => {
			const wh = d3.select(this).attr('viewBox').split(' ');
			const w = wh[2];
			const h = wh[3];
			d3.select(this).call(vis.width(w).height(h));
		});
		*/
	}


	onResize2() {
		/*
		d3.selectAll('[fit]').each(() => {
			const ratio = d3.select(this).attr('ratio');
			const factor = (ratio) ? (ratio.split(' ')[1] / ratio.split(' ')[0]) : 1;
			const computedW = parseInt(window.getComputedStyle(this).width.split('px')[0], 10);
			const attrH = d3.select(this).attr('height');
			const calcH = (attrH) ? attrH : parseInt(computedW, 10) * factor);

		d3.select(this)
			.attr('viewBox', '0 0 ' + parseInt(computedW, 10) + ' ' + parseInt(calcH, 10))
			.call(vis.width(computedW).height(calcH));
	});
	*/
	}
}
