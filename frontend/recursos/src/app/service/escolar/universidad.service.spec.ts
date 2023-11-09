import { TestBed } from '@angular/core/testing';

import { UniversidadService } from './universidad.service';

describe('UniversidadService', () => {
  let service: UniversidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
