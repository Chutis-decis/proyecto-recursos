import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAspiranteComponent } from './registro-aspirante.component';

describe('RegistroAspiranteComponent', () => {
  let component: RegistroAspiranteComponent;
  let fixture: ComponentFixture<RegistroAspiranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroAspiranteComponent]
    });
    fixture = TestBed.createComponent(RegistroAspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
