import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAspiranteComponent } from './nuevo-aspirante.component';

describe('NuevoAspiranteComponent', () => {
  let component: NuevoAspiranteComponent;
  let fixture: ComponentFixture<NuevoAspiranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoAspiranteComponent]
    });
    fixture = TestBed.createComponent(NuevoAspiranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
