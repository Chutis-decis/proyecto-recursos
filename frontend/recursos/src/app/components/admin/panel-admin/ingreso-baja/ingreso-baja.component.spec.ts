import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoBajaComponent } from './ingreso-baja.component';

describe('IngresoBajaComponent', () => {
  let component: IngresoBajaComponent;
  let fixture: ComponentFixture<IngresoBajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngresoBajaComponent]
    });
    fixture = TestBed.createComponent(IngresoBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
