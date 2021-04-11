import { TestBed } from '@angular/core/testing';

import { CreateProjectService } from './create-project.service';

describe('CreateProjectServiceService', () => {
  let service: CreateProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
