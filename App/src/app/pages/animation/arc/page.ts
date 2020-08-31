import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';

import * as d3 from 'd3';


import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-animation',
	templateUrl: 'page.html',
	styleUrls: ['page.scss'],
	encapsulation: ViewEncapsulation.None /* .ShadowDom .None */
})

export class ArcAnimationPage implements OnInit {
	public ID = 'ArcAnimationPage';

	private toolbox = new Toolbox(this.ID);

	private playground: any;
	private svg: any;

	private a: any;
	private arcInner: any;
	private arcOuter: any;
	private dataInner: any;
	private dataOuter: any;

	curr1 = 180;
	curr2 = 90;

	stopIntervall = false;

	constructor(public router: Router, private elementRef: ElementRef) {
		this.toolbox.log('constructor');
	}

	ngOnInit() {
		this.toolbox.log('ngOnInit');

		this.playground = d3.select('#playground');

		this.a = d3.arc();

		this.arcInner = this.playground
			.select('g')
			.append('path')
			.classed('playground inner', true);

		this.arcOuter = this.playground
			.select('g')
			.append('path')
			.classed('playground outer', true);
	}

	update(angelOuter, angelInner) {
		console.log('update', 'inner=' + angelInner + ', outer=' + angelOuter);

		this.dataInner = this.a({
			startAngle: 0,
			endAngle: (angelOuter / 180) * Math.PI,
			innerRadius: 70,
			outerRadius: 90
		});

		this.dataOuter = this.a({
			startAngle: 0,
			endAngle: (angelInner / 180) * Math.PI,
			innerRadius: 50,
			outerRadius: 70
		});

		this.arcInner.attr('d', this.dataOuter);
		this.arcOuter.attr('d', this.dataInner);

		return angelOuter + 1;
	}

	stop() {
		this.stopIntervall = true;
		console.log('stop_intervall: ysn_stop_intervall=' + this.stopIntervall);
	}

	resume() {
		this.stopIntervall = false;
		console.log('resume_intervall: ysn_stop_intervall=' + this.stopIntervall);
	}

	step() {
		this.update(this.curr1, this.curr2);

		this.curr1 += 1;
		if (this.curr1 > 365) {
			this.curr1 = 0;
			this.curr2 += 5;
		}
	}

	start() {
		console.log('start_intervall:');

		const intervall = d3.interval(elapsed => {
			this.update(this.curr1, 360 /* curr2 */);

			this.curr1 += 1;
			if (this.curr1 > 365) {
				this.curr1 = 0;
				this.curr2 += 5;
			}
			if (this.curr2 > 356) {
				intervall.stop();
			}

			console.log('d3.interval: stopIntervall=' + this.stopIntervall);
			if (this.stopIntervall === true) {
				console.log('d3.interval: stop interval');

				intervall.stop();
			}
		}, 10);
	}

}
