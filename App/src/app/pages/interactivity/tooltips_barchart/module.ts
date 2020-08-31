import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TooltipsBarChartPage } from './page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		RouterModule.forChild([{ path: '', component: TooltipsBarChartPage }]),
		ComponentsModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [TooltipsBarChartPage]
})
export class TooltipsBarChartPageModule { }
