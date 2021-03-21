import {INSTAGRAM_API_KEY, INSTAGRAM_API_URL, InstagramSearchService} from './instagram-search.service';

export const youTubeSearchInjectables: Array<any> = [
  {provide: InstagramSearchService, useClass: InstagramSearchService},
  {provide: INSTAGRAM_API_KEY, useValue: INSTAGRAM_API_KEY},
  {provide: INSTAGRAM_API_URL, useValue: INSTAGRAM_API_URL}
];
