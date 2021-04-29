export interface OrderForm {
  projectTitle: string;
  constructionPlace: string;
  cadastralAreaAndParcelNumber: string;
  projectType: Array<string>;
  additionalServices: Array<string>;
  connectionProjects: Array<string>;
}
