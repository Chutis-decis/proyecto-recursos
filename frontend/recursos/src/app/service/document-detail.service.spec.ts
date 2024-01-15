import { TestBed } from '@angular/core/testing';

import { DocumentDetailService } from './document-detail.service';

describe('DocumentDetailService', () => {
  let service: DocumentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
