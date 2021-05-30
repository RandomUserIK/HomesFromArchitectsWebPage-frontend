import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogGalleryFooterComponent} from './blog-gallery-footer.component';

describe('BlogGalleryFooterComponent', () => {
  let component: BlogGalleryFooterComponent;
  let fixture: ComponentFixture<BlogGalleryFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogGalleryFooterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGalleryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
