import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalesBajaComponent } from './personales-baja.component';

describe('PersonalesBajaComponent', () => {
  let component: PersonalesBajaComponent;
  let fixture: ComponentFixture<PersonalesBajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalesBajaComponent]
    });
    fixture = TestBed.createComponent(PersonalesBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
