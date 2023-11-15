import { TestBed } from '@angular/core/testing';

import { PlanEducativoService } from './plan-educativo.service';

describe('PlanEducativoService', () => {
  let service: PlanEducativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanEducativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
