import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosFtdComponent } from './datos-ftd.component';

describe('DatosFtdComponent', () => {
  let component: DatosFtdComponent;
  let fixture: ComponentFixture<DatosFtdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosFtdComponent]
    });
    fixture = TestBed.createComponent(DatosFtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
