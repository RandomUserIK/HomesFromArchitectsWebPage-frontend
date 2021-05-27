import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogArticleComponent } from './admin-blog-article.component';

describe('AdminBlogArticleComponent', () => {
  let component: AdminBlogArticleComponent;
  let fixture: ComponentFixture<AdminBlogArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
