import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GlobeCenterOnClickPageRoutingModule } from './routing.module';

import { GlobeCenterOnClickPage } from './page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		GlobeCenterOnClickPageRoutingModule,
		ComponentsModule
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [GlobeCenterOnClickPage]
})
export class GlobeCenterOnClickPageModule { }
