import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherBlogArticlesComponent } from './another-blog-articles.component';

describe('AnotherBlogArticlesComponent', () => {
  let component: AnotherBlogArticlesComponent;
  let fixture: ComponentFixture<AnotherBlogArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherBlogArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherBlogArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
