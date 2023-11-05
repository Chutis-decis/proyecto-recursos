import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosFtdComponent } from './registro-datos-ftd.component';

describe('RegistroDatosFtdComponent', () => {
  let component: RegistroDatosFtdComponent;
  let fixture: ComponentFixture<RegistroDatosFtdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroDatosFtdComponent]
    });
    fixture = TestBed.createComponent(RegistroDatosFtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
