import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GlobeWithCountriesPage } from './page';

describe('GlobeWithCountriesPage', () => {
	let component: GlobeWithCountriesPage;
	let fixture: ComponentFixture<GlobeWithCountriesPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [GlobeWithCountriesPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(GlobeWithCountriesPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
