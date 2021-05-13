import { TestBed } from '@angular/core/testing';

import { CreateProjectFormInitializerService } from './create-project-form-initializer.service';

describe('CreateProjectFormInitializerService', () => {
  let service: CreateProjectFormInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateProjectFormInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
