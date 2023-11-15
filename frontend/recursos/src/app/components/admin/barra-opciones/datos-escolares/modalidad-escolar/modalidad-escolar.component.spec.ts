import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadEscolarComponent } from './modalidad-escolar.component';

describe('ModalidadEscolarComponent', () => {
  let component: ModalidadEscolarComponent;
  let fixture: ComponentFixture<ModalidadEscolarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalidadEscolarComponent]
    });
    fixture = TestBed.createComponent(ModalidadEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
