import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminBlogArticlesGalleryComponent} from './admin-blog-articles-gallery.component';

describe('AdminBlogArticlesGalleryComponent', () => {
  let component: AdminBlogArticlesGalleryComponent;
  let fixture: ComponentFixture<AdminBlogArticlesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminBlogArticlesGalleryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogArticlesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
