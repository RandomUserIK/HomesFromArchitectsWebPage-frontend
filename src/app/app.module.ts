import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {IvyGalleryModule} from 'angular-gallery';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AuthInterceptorService} from './auth/services/auth-interceptor.service';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {NotFoundModule} from './components/not-found/not-found.module';


const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./admin-view/admin-view.module').then(m => m.AdminViewModule)},
  {path: '', loadChildren: () => import('./public-view/public-view.module').then(m => m.PublicViewModule)},
  {path: '**', component: NotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    IvyGalleryModule,
    NgbModule,
    NotFoundModule,
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
