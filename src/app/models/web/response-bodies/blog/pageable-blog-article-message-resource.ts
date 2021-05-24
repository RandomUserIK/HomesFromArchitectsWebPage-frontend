import {Delta} from 'quill';

export interface PageableBlogArticleMessageResource {
  blogArticles: Array<Delta>;
  currentPage: number;
  totalElements: number;
  elementsPerPage: number;
}
