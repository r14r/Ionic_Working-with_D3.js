import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RotationGlobeWithMarkerPage } from './page';

describe('RotationGlobeWithMarkerPage', () => {
	let component: RotationGlobeWithMarkerPage;
	let fixture: ComponentFixture<RotationGlobeWithMarkerPage>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RotationGlobeWithMarkerPage],
			imports: [IonicModule.forRoot()]
		}).compileComponents();

		fixture = TestBed.createComponent(RotationGlobeWithMarkerPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
