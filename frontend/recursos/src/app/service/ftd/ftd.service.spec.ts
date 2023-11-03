import { TestBed } from '@angular/core/testing';

import { FtdService } from './ftd.service';

describe('FtdService', () => {
  let service: FtdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FtdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
