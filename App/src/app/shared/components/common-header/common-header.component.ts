import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'common-header',
	templateUrl: 'common-header.component.html',
	styleUrls: ['common-header.component.scss']
})
export class CommonHeaderComponent implements AfterViewInit {

	@ViewChild('title', { static: true }) elementRefTitle: ElementRef;

	defaultTitle = 'Data-Driven-Documents';

	private toolbox = new Toolbox('CommonHeaderComponent');

	constructor() {
		// this.toolbox.log('constructor');
	}

	ngAfterViewInit() {
		/*
		console.log(this.elementRefTitle.nativeElement)

		try {
			this.elementRefTitle.nativeElement.innerHTML = this.defaultTitle;
		} catch (error) {
			console.log(error);
		}
		*/
	}
}
