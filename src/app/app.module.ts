import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IvyGalleryModule} from 'angular-gallery';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthInterceptorService} from './auth/services/auth-interceptor.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthModule} from './auth/auth.module';

const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./admin-view/admin-view.module').then(m => m.AdminViewModule)},
  {path: '', loadChildren: () => import('./public-view/public-view.module').then(m => m.PublicViewModule)},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HttpClientModule,
    IvyGalleryModule,
    NgbModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
