import { TestBed } from '@angular/core/testing';

import { RequestEntityPreparationService } from './request-entity-preparation.service';

describe('RequestEntityPreparationService', () => {
  let service: RequestEntityPreparationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestEntityPreparationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
