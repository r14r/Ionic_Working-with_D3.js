import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent {
	public appPages = [
		{ title: 'Responsive: Dynamic SVG', url: '/responsive/dynamic-svg', icon: 'list' },
		{ title: 'Responsive: Using JSON', url: '/responsive/using-json', icon: 'list' },
		{ title: 'Basic Elements', url: '/01', icon: 'list' },
		{ title: 'Basic Shapes', url: '/02', icon: 'list' },
		{ title: 'Chart: Bar/Basic', url: '/chart/bar/basic', icon: 'stats' },
		{ title: 'Chart: Pie/Basic', url: '/chart/pie/basic', icon: 'stats' },
		{ title: 'Chart: Bar/Race', url: '/chart/bar/race', icon: 'stats' },
		{ title: 'Globe: Rotate', url: '/globe/rotate', icon: 'globe' },
		{ title: 'Globe: Countries', url: '/globe/countries', icon: 'globe' },
		{ title: 'Globe: Center on Click', url: '/globe/center-on-click', icon: 'globe' },
		{ title: 'Tooltips: Simple', url: '/tooltips/simple', icon: 'text' },
		{ title: 'Tooltips: Grid', url: '/tooltips/grid', icon: 'text' },
		{ title: 'Tooltips: Bar Chart', url: '/tooltips/barchart', icon: 'text' },
		{ title: 'Home', url: '/home', icon: 'home' },
		{ title: 'List', url: '/list', icon: 'list' },
		{ title: 'Demos', url: '/home', icon: 'home' },
		{ title: 'Animation', url: '/animation', icon: 'home' },
		{ title: 'Animation: Arc', url: '/animation/arc', icon: 'home' },
		{ title: 'Axis', url: '/00', icon: 'list' },
		{ title: 'Countdown', url: '/03', icon: 'clock' },
		{ title: 'Dynamic SVG', url: '/04', icon: 'list' },
		{ title: 'Group Element', url: '/05', icon: 'list' },
		{ title: 'Group Element D3', url: '/06', icon: 'list' },
		{ title: 'Path SVG', url: '/08', icon: 'list' },
		{ title: 'Scales', url: '/09', icon: 'list' },
		{ title: 'Text: Rotated', url: '/text-rotated', icon: 'text' },
		{ title: 'Text: Elements', url: '/10', icon: 'list' }
	];

	constructor(
		private platform: Platform,
		private splashScreen: SplashScreen,
		private statusBar: StatusBar
	) {
		this.initializeApp();
	}

	initializeApp() {
		this.platform.ready().then(() => {
			/*
			this.statusBar.styleDefault();
			this.splashScreen.hide();
			*/
		});
	}
}
