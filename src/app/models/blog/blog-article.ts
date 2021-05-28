import {DeltaOperation} from 'quill';

export interface BlogArticle {
  title: string;
  titleImage: string;
  content: Array<DeltaOperation>;
}
