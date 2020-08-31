
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlobeWithCountriesPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: GlobeWithCountriesPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class GlobeWithCountriesPageRoutingModule { }
