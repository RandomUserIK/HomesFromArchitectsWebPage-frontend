import {TestBed} from '@angular/core/testing';

import {CreateBlogArticleService} from './create-blog-article.service';

describe('CreateBlogArticleService', () => {
  let service: CreateBlogArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBlogArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
