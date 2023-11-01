import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDatosIngresoComponent } from './watch-datos-ingreso.component';

describe('WatchDatosIngresoComponent', () => {
  let component: WatchDatosIngresoComponent;
  let fixture: ComponentFixture<WatchDatosIngresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchDatosIngresoComponent]
    });
    fixture = TestBed.createComponent(WatchDatosIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
