import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobeWorldTourPageRoutingModule } from './routing.module';

import { GlobeWorldTourPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GlobeWorldTourPageRoutingModule
	],
	declarations: [GlobeWorldTourPage]
})
export class GlobeWorldTourPageModule { }
