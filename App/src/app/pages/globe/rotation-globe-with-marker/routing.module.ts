import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RotationGlobeWithMarkerPage } from './page';

const routes: Routes = [
	{
		path: '',
		component: RotationGlobeWithMarkerPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class RotationGlobeWithMarkerPageRoutingModule { }
