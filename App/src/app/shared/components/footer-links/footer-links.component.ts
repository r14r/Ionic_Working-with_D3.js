import { Component, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription as RxjsSubscription } from 'rxjs';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

/*
import { PagesList } from 'src/app/pages.demo';
*/
@Component({
	selector: 'footer-links',
	templateUrl: 'footer-links.component.html',
	styleUrls: ['footer-links.component.scss']
})
export class FooterLinksComponent implements AfterViewInit {
	public ID = 'FooterLinkComponent';

	@Input() tutorialUrl: string;
	@Input() parent: any;

	subscriptionEnter: RxjsSubscription;
	subscriptionLeave: RxjsSubscription;

	prevPage: any;
	nextPage: any;

	private toolbox = new Toolbox('FooterLinksComponent');

	constructor(public router: Router) {
		this.toolbox.log('constructor');
	}

	ngAfterViewInit() {
		try {
			this.toolbox.log('constructor', 'parent.ID=' + this.parent.ID);
		} catch (error) {
			this.toolbox.log('constructor', 'parent=' + JSON.stringify(this.parent));
		}

		/*
		const currentViewInList = PagesList.find(item => item.ID === this.parent.ID);
		const currentIndexView = PagesList.indexOf(currentViewInList);

		this.toolbox.log('currentViewInList =' + JSON.stringify(currentViewInList));
		this.toolbox.log('currentIndexView =' + currentIndexView);

		this.prevPage = 'demo/' + (currentIndexView - 1).toString(); // PagesList[currentIndexView - 1] || null;
		this.nextPage = 'demo/' + (currentIndexView + 1).toString(); // PagesList[currentIndexView + 1] || null;

		this.toolbox.log('prev =' + this.prevPage + ', ' + 'next =' + this.nextPage);
		*/
	}

	openPage(url: string) {
		/*
		const redirectData: SideMenuRedirectEventData = {
			displayName: url
		};

		this.eventCtrl.publish(SideMenuRedirectEvent, redirectData);
		*/
		this.router.navigateByUrl(url, { replaceUrl: true });
	}
}
