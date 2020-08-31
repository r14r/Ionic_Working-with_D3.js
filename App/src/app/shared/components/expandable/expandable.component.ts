import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { Toolbox } from 'src/app/shared/helpers/toolbox';

@Component({
	selector: 'expandable',
	templateUrl: 'expandable.component.html',
	styleUrls: ['expandable.component.scss']
})

export class ExpandableComponent {

	@ViewChild('expandWrapper', { read: ElementRef, static: true }) expandWrapper;

	@Input(/*'expanded' */) el_expanded: boolean; // = false;
	@Input(/*'button' */) el_hasButton: boolean; // = true;
	@Input(/*'showText'*/) el_showBtnTxt: string; // = 'Show more';
	@Input(/*'hideText' */) el_hideBtnTxt: string; // = 'Show less';
	@Input(/*'btnColor'*/) el_btnColor: string; // = 'dark';

	private toolbox = new Toolbox('ExpandableComponent');

	constructor(public renderer: Renderer2) {
		this.toolbox.log('constructor');

		this.el_hideBtnTxt = 'Show less';
		this.el_showBtnTxt = 'Show more';
	}

	expand() {
		this.el_expanded = !this.el_expanded;
	}
}
