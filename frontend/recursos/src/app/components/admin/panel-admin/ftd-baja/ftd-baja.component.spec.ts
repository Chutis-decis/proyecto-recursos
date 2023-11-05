import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtdBajaComponent } from './ftd-baja.component';

describe('FtdBajaComponent', () => {
  let component: FtdBajaComponent;
  let fixture: ComponentFixture<FtdBajaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FtdBajaComponent]
    });
    fixture = TestBed.createComponent(FtdBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
