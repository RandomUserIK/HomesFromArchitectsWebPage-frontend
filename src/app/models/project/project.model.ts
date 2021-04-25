import {Category} from './enums/category.enum';

export interface Project {
  id?: number;
  title?: string;
  category?: Category
  titleImage?: string;
  imagePaths?: Array<string>;
}
