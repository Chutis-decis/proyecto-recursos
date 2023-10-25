import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosPersonalesComponent } from './registro-datos-personales.component';

describe('RegistroDatosPersonalesComponent', () => {
  let component: RegistroDatosPersonalesComponent;
  let fixture: ComponentFixture<RegistroDatosPersonalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroDatosPersonalesComponent]
    });
    fixture = TestBed.createComponent(RegistroDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
