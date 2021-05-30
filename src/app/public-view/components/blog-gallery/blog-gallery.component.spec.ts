import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BlogGalleryComponent} from './blog-gallery.component';

describe('BlogGalleryComponent', () => {
  let component: BlogGalleryComponent;
  let fixture: ComponentFixture<BlogGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogGalleryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
