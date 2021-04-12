import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {IvyGalleryModule} from 'angular-gallery';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AuthInterceptorService} from './auth/services/auth-interceptor.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthModule} from './auth/auth.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CreateCommonProjectComponent} from './admin-view/forms/create-common-project/create-common-project.component';
import {AdminFormModule} from './admin-view/forms/admin-form.module';


const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./admin-view/admin-view.module').then(m => m.AdminViewModule)},
  {path: '', loadChildren: () => import('./public-view/public-view.module').then(m => m.PublicViewModule)},
  {path: '**', component: NotFoundComponent}
  {path: 'vytvor', component: CreateCommonProjectComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdminFormModule,
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
