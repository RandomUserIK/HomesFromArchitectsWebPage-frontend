import { TestBed } from '@angular/core/testing';

import { ProjectsGalleryStateService } from './projects-gallery-state.service';

describe('ProjectsGalleryStateService', () => {
  let service: ProjectsGalleryStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsGalleryStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
