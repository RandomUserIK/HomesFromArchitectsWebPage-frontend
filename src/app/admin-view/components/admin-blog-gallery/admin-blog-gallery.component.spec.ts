import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminBlogGalleryComponent} from './admin-blog-gallery.component';

describe('AdminBlogGalleryComponent', () => {
  let component: AdminBlogGalleryComponent;
  let fixture: ComponentFixture<AdminBlogGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBlogGalleryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
