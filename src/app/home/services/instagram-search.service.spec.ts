import { TestBed } from '@angular/core/testing';

import { InstagramSearchService } from './instagram-search.service';

describe('InstagramSearchService', () => {
  let service: InstagramSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstagramSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
