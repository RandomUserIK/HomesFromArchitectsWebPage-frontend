import {TestBed} from '@angular/core/testing';

import {BlogArticleService} from './blog-article.service';

describe('CreateBlogArticleService', () => {
  let service: BlogArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
