import {BlogArticle} from '../../../blog/blog-article';

export interface PageableBlogArticleMessageResource {
  blogArticles: Array<BlogArticle>;
  currentPage: number;
  totalElements: number;
  elementsPerPage: number;
}
