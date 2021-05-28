import {Delta} from 'quill';

export interface BlogArticleFormData {
  title: string;
  titleImage: File;
  content: Delta;
}
