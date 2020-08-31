import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RotationGlobeWithMarkerPageRoutingModule } from './routing.module';

import { RotationGlobeWithMarkerPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RotationGlobeWithMarkerPageRoutingModule
	],
	declarations: [RotationGlobeWithMarkerPage]
})
export class RotationGlobeWithMarkerPageModule { }
