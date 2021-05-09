import { TestBed } from '@angular/core/testing';

import { AutoScrollService } from './auto-scroll.service';

describe('AutoScrollService', () => {
  let service: AutoScrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoScrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
