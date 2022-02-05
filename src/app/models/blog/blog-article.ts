import {DeltaOperation} from 'quill';
import {ImageModel} from '../project/image-model';

export interface BlogArticle {
  id?: number;
  title?: string;
  titleImage?: ImageModel;
  description?: string;
  content?: Array<DeltaOperation>;
}
