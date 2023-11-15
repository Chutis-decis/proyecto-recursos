import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadComponent } from './modalidad.component';

describe('ModalidadComponent', () => {
  let component: ModalidadComponent;
  let fixture: ComponentFixture<ModalidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalidadComponent]
    });
    fixture = TestBed.createComponent(ModalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
