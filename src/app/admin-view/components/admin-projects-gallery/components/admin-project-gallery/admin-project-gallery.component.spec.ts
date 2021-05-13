import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectGalleryComponent } from './admin-project-gallery.component';

describe('AdminProjectGalleryComponent', () => {
  let component: AdminProjectGalleryComponent;
  let fixture: ComponentFixture<AdminProjectGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProjectGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
