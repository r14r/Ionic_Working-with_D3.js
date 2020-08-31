import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CommonHeaderComponent } from './common-header/common-header.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { ExpandableComponent } from './expandable/expandable.component';

@NgModule({
	declarations: [
		CommonHeaderComponent, FooterLinksComponent, ExpandableComponent
	],
	exports: [
		CommonHeaderComponent, FooterLinksComponent, ExpandableComponent
	],
	imports: [
		CommonModule, IonicModule
	]
})
export class ComponentsModule { }
