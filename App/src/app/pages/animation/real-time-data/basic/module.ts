import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/shared/components/components.module';

import { RealTimeDataBasicPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([{ path: '', component: RealTimeDataBasicPage }]),
		ComponentsModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [RealTimeDataBasicPage]
})
export class RealTimeDataBasicPageModule { }