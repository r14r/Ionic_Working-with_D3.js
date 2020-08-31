import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobeWorldTourPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: GlobeWorldTourPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GlobeWorldTourPageRoutingModule { }
