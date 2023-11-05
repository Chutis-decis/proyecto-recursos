import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaresBajaComponent } from './escolares-baja.component';

describe('EscolaresBajaComponent', () => {
  let component: EscolaresBajaComponent;
  let fixture: ComponentFixture<EscolaresBajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscolaresBajaComponent]
    });
    fixture = TestBed.createComponent(EscolaresBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
