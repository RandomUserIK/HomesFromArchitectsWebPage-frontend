import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {filter, map, mergeMap} from 'rxjs/operators';
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

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private seoService: SeoService, private fileService: FileService) {
  }

  private checkIfActualRouteIsBlogOrProject(route: ActivatedRoute): RouteData {
    if (route.snapshot.routeConfig.path.includes('katalogove-projekty')) {
      return {type: 'project', isProjectOrBlog: true};
    } else if (route.snapshot.routeConfig.path.includes('blog')) {
      return {type: 'blog', isProjectOrBlog: true};
    } else {
      return {type: '', isProjectOrBlog: false};
    }
  }


  ngOnInit(): void {
    const activatedRouteObservable: Observable<ActivatedRoute> =
      this.router.events.pipe(
        filter((e): e is NavigationEnd => {
          try {
            return e && typeof e === 'object' && e instanceof NavigationEnd;
          } catch (error) {
            // console.log(error)
          }
        }),
        map(e => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary')
      )

    activatedRouteObservable.pipe(
      mergeMap((route) => {
        return route.data;
      })).subscribe(data => {
      this.seoService.updateTitle(data.seo.title);
      this.seoService.updateMetaTags(data.seo.metaTags);
    })

    activatedRouteObservable.pipe(
      mergeMap((route) => {
        const data: RouteData = this.checkIfActualRouteIsBlogOrProject(route);
        return (route.snapshot.params.id && data.isProjectOrBlog) ?
          this.fileService.getTitlePhotoFromPath(route.snapshot.params.id, data.type) : of({});
      })).subscribe(safeUrlOfPhoto => {
      this.seoService.updatePhotoMetaTags(safeUrlOfPhoto);
    })
  }
}
