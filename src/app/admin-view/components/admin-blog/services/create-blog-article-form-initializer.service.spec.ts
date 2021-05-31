import {TestBed} from '@angular/core/testing';

import {CreateBlogArticleFormInitializerService} from './create-blog-article-form-initializer.service';

describe('CreateBlogArticleFormInitializerService', () => {
  let service: CreateBlogArticleFormInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBlogArticleFormInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
