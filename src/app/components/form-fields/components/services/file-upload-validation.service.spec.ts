import { TestBed } from '@angular/core/testing';

import { FileUploadValidationService } from './file-upload-validation.service';

describe('FileUploadValidationService', () => {
  let service: FileUploadValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileUploadValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
