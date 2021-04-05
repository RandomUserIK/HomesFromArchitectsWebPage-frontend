import { TestBed } from '@angular/core/testing';

import { SearchHeaderService } from './search-header.service';

describe('SearchHeaderService', () => {
  let service: SearchHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
