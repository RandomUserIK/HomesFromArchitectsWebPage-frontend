import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectsGalleryComponent } from './admin-projects-gallery.component';

describe('ProjectsListComponent', () => {
  let component: AdminProjectsGalleryComponent;
  let fixture: ComponentFixture<AdminProjectsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProjectsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
