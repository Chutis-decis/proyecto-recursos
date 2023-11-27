import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaComponent } from './beca.component';

describe('BecaComponent', () => {
  let component: BecaComponent;
  let fixture: ComponentFixture<BecaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecaComponent]
    });
    fixture = TestBed.createComponent(BecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
