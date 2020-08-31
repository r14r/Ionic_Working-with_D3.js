import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from 'src/app/shared/components/components.module';

import { ViewboxPage } from './page';

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, ComponentsModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	declarations: [ViewboxPage]
})
export class ViewboxPageModule { }
