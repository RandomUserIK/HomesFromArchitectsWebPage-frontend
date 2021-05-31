import {DeltaOperation} from 'quill';

export interface BlogArticle {
  id?: number;
  title?: string;
  titleImage?: string;
  description?: string;
  content?: Array<DeltaOperation>;
}
