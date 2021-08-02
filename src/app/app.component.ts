import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, NavigationEnd, Params, Router} from '@angular/router';
import {combineLatest, EMPTY, forkJoin, Observable, of} from 'rxjs';
import {filter, isEmpty, map, mergeMap, switchMap} from 'rxjs/operators';
import {SeoService} from './services/SeoService.service';
import {FileService} from './admin-view/services/file-service';

export interface RouteData {
  type: string;
  isProjectOrBlog: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'HomesFromArchitectsWebPage-frontend';
  private data: RouteData;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private seoService: SeoService, private fileService: FileService) {
  }

  // private checkIfFetchTitlePhoto(): RouteData{
  //   if(route.snapshot.routeConfig.path.includes('katalogove-projekty')){
  //
  //   }else if(){
  //
  //   }else{
  //     return {type: '', isProjectOrBlog: true};
  //
  //   }
  // }


  ngOnInit(): void {
    const activatedRouteObservable: Observable<ActivatedRoute> = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(e => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary')
    )
    console.log('si tu')

    combineLatest([activatedRouteObservable.pipe(
      mergeMap((route) => {
        return route.data;
      })
    ), activatedRouteObservable.pipe(
      mergeMap((route) => {
        // console.log(route.snapshot.routeConfig.path.includes('katalogove-projekty'))
        return (route.snapshot.params.id) ?
          this.fileService.getTitlePhotoFromPath(route.snapshot.params.id, 'project') : of({});
      })
    )]).subscribe(([data, menuItemsRes]) => {
      console.log('tu si neni')
      console.log(menuItemsRes)
      this.seoService.updateTitle(data.seo.title);
      this.seoService.updateMetaTags(data.seo.metaTags);
      this.seoService.updatePhotoMetaTags((Object.keys(menuItemsRes).length) ? menuItemsRes : 'assets/logo.png');
    });
  }
}
