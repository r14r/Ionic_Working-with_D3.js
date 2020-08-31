import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobeCenterOnClickPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: GlobeCenterOnClickPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GlobeCenterOnClickPageRoutingModule { }
