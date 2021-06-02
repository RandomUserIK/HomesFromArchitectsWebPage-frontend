import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogGalleryArticleComponent} from './blog-gallery-article.component';

describe('BlogGalleryArticleComponent', () => {
  let component: BlogGalleryArticleComponent;
  let fixture: ComponentFixture<BlogGalleryArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogGalleryArticleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGalleryArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
