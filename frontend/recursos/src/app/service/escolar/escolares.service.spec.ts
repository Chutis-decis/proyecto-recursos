import { TestBed } from '@angular/core/testing';

import { EscolaresService } from './escolares.service';

describe('EscolaresService', () => {
  let service: EscolaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscolaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
