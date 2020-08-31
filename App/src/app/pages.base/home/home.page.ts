import { Component } from '@angular/core';

import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {
	public ID = 'HomePage';

	private toolbox = new Toolbox(this.ID);

	constructor() {
		this.toolbox.log('constructor');
	}

}
