import {InstagramSearchService} from './instagram-search.service';

export const instagramSearchInjectables: Array<any> = [
  {provide: InstagramSearchService, useClass: InstagramSearchService}
];
