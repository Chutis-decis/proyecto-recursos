import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramiteComponent } from './tramite.component';

describe('TramiteComponent', () => {
  let component: TramiteComponent;
  let fixture: ComponentFixture<TramiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TramiteComponent]
    });
    fixture = TestBed.createComponent(TramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
