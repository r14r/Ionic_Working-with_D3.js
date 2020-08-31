import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/shared/components/components.module';

import { BarChartBasicPage } from './page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([{ path: '', component: BarChartBasicPage }]),
		ComponentsModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [BarChartBasicPage]
})
export class BarChartBasicPageModule { }
