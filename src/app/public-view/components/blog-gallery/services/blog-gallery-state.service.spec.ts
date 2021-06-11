import { TestBed } from '@angular/core/testing';

import { BlogGalleryStateService } from './blog-gallery-state.service';

describe('BlogGalleryStateService', () => {
  let service: BlogGalleryStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogGalleryStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
