import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDatosFtdComponent } from './watch-datos-ftd.component';

describe('WatchDatosFtdComponent', () => {
  let component: WatchDatosFtdComponent;
  let fixture: ComponentFixture<WatchDatosFtdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchDatosFtdComponent]
    });
    fixture = TestBed.createComponent(WatchDatosFtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
