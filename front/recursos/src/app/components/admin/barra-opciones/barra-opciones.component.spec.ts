import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraOpcionesComponent } from './barra-opciones.component';

describe('BarraOpcionesComponent', () => {
  let component: BarraOpcionesComponent;
  let fixture: ComponentFixture<BarraOpcionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraOpcionesComponent]
    });
    fixture = TestBed.createComponent(BarraOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
