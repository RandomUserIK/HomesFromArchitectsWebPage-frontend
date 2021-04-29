import { TestBed } from '@angular/core/testing';

import { CreateCommonProjectService } from './create-common-project.service';

describe('CreateProjectServiceService', () => {
  let service: CreateCommonProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCommonProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
