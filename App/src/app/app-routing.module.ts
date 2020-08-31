import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' }
	, { path: 'responsive/dynamic-svg', loadChildren: () => import('./pages/responsive/dynamic-svg/pages/module').then(m => m.DynamicSVGPageModule) }
	, { path: 'responsive/using-json', loadChildren: () => import('./pages/responsive/using-json/pages/module').then(m => m.UsingJSONPageModule) }
	, { path: '00', loadChildren: () => import('./pages/axes/module').then(m => m.AxesPageModule) }
	, { path: '01', loadChildren: () => import('./pages/basic/elements/module').then(m => m.BasicElementsPageModule) }
	, { path: '02', loadChildren: () => import('./pages/basic/shapes/module').then(m => m.BasicShapesPageModule) }
	, { path: '03', loadChildren: () => import('./pages/countdown-timer/module').then(m => m.CountdownTimerPageModule) }
	, { path: '04', loadChildren: () => import('./pages/responsive/dynamic-svg-coord/module').then(m => m.DynamicSvgCoordPageModule) }
	, { path: '05', loadChildren: () => import('./pages/basic/group-element/module').then(m => m.GroupElementPageModule) }
	, { path: '06', loadChildren: () => import('./pages/basic/group-element-d3/module').then(m => m.GroupElementD3PageModule) }
	, { path: '08', loadChildren: () => import('./pages/paths-svg/module').then(m => m.PathsSvgPageModule) }
	, { path: '09', loadChildren: () => import('./pages/scales/module').then(m => m.ScalesPageModule) }
	, { path: '10', loadChildren: () => import('./pages/basic/text/text-element/module').then(m => m.TextElementPageModule) }
	, { path: '10', loadChildren: () => import('./pages/basic/text/text-element/module').then(m => m.TextElementPageModule) }
	, { path: 'chart/bar/race', loadChildren: () => import('./pages/basic/chart-bar/race/module').then(m => m.BarChartRacePageModule) }
	, { path: 'chart/bar/basic', loadChildren: () => import('./pages/basic/chart-bar/basic/pages/module').then(m => m.BarChartBasicPageModule) }
	, { path: 'chart/pie/basic', loadChildren: () => import('./pages/basic/chart-pie/basic/pages/module').then(m => m.PieChartBasicPageModule) }
	, { path: 'animation', loadChildren: () => import('./pages/animation/basic/module').then(m => m.AnimationPageModule) }
	, { path: 'animation/arc', loadChildren: () => import('./pages/animation/arc/module').then(m => m.ArcAnimationPageModule) }
	, { path: 'animation/real-time-data/basic', loadChildren: () => import('./pages/animation/real-time-data/basic/module').then(m => m.RealTimeDataBasicPageModule) }
	, { path: 'text-rotated', loadChildren: () => import('./pages/basic/text/rotated-text/module').then(m => m.RotatedTextPageModule) }
	, { path: 'tooltips/simple', loadChildren: () => import('./pages/interactivity/tooltips_simple/module').then(m => m.TooltipsSimplePageModule) }
	, { path: 'tooltips/grid', loadChildren: () => import('./pages/interactivity/tooltips_grid/module').then(m => m.TooltipsGridPageModule) }
	, { path: 'tooltips/barchart', loadChildren: () => import('./pages/interactivity/tooltips_barchart/module').then(m => m.TooltipsBarChartPageModule) }
	, { path: 'home', loadChildren: () => import('./pages.base/home/home.module').then(m => m.HomePageModule) }
	, { path: 'list', loadChildren: () => import('./pages.base/list/list.module').then(m => m.ListPageModule) }
	, { path: 'home', loadChildren: () => import('./pages/home/module').then(m => m.DemosHomePageModule) }
	, { path: 'globe/rotate', loadChildren: () => import('./pages/globe/rotation-globe-with-marker/module').then(m => m.RotationGlobeWithMarkerPageModule) }
	, { path: 'globe/countries', loadChildren: () => import('./pages/globe/globe-with-countries/module').then(m => m.GlobeWithCountriesPageModule) }
	, { path: 'globe/center-on-click', loadChildren: () => import('./pages/globe/center-on-click/module').then(m => m.GlobeCenterOnClickPageModule) }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
