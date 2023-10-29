import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchDatosEscolaresComponent } from './watch-datos-escolares.component';

describe('WatchDatosEscolaresComponent', () => {
  let component: WatchDatosEscolaresComponent;
  let fixture: ComponentFixture<WatchDatosEscolaresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WatchDatosEscolaresComponent]
    });
    fixture = TestBed.createComponent(WatchDatosEscolaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
