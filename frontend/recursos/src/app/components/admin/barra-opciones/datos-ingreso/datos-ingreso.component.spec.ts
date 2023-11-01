import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosIngresoComponent } from './datos-ingreso.component';

describe('DatosIngresoComponent', () => {
  let component: DatosIngresoComponent;
  let fixture: ComponentFixture<DatosIngresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosIngresoComponent]
    });
    fixture = TestBed.createComponent(DatosIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
