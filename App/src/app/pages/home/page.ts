import { Component, ViewChild, ElementRef } from '@angular/core';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-samples-home',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class DemosHomePage {
	public ID = 'DemosHomePage';

	private toolbox = new Toolbox(this.ID);

	@ViewChild('boxRef', { read: ElementRef, static: false }) elementRefBox: ElementRef;
	box: any;

	constructor() {
		this.toolbox.log('constructor');

		try {
			this.toolbox.log('constructor', 'elementRefBox = ' + this.elementRefBox);

			this.toolbox.log('constructor', 'try reading element ref for #boxRef');
			this.box = this.elementRefBox.nativeElement;
		} catch (error) {
			console.log('ERROR:', error);
		}

		this.toolbox.log('constructor', 'element #box=' + this.box);
	}

}
