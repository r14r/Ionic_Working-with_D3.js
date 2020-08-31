import { Component } from '@angular/core';
import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'page-group-element',
	templateUrl: 'page.html',
	styleUrls: ['page.scss']
})
export class GroupElementPage {
	public ID = 'GroupElementPage';

	private toolbox = new Toolbox(this.ID);
}
