import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosIngresoComponent } from './RegistroDatosIngresoComponent';

describe('RegistroDatosIngresoComponent', () => {
  let component: RegistroDatosIngresoComponent;
  let fixture: ComponentFixture<RegistroDatosIngresoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroDatosIngresoComponent]
    });
    fixture = TestBed.createComponent(RegistroDatosIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
