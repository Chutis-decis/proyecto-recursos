import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanEducativoComponent } from './plan-educativo.component';

describe('PlanEducativoComponent', () => {
  let component: PlanEducativoComponent;
  let fixture: ComponentFixture<PlanEducativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanEducativoComponent]
    });
    fixture = TestBed.createComponent(PlanEducativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
