import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobeWithCountriesPageRoutingModule } from './routing.module';

import { GlobeWithCountriesPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GlobeWithCountriesPageRoutingModule
	],
	declarations: [GlobeWithCountriesPage]
})
export class GlobeWithCountriesPageModule { }
