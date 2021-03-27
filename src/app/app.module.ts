import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './public-view/header/header.component';
import {HomeModule} from './public-view/home/home.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './public-view/footer/footer.component';
import {IvyGalleryModule} from 'angular-gallery';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './public-view/home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuardService} from './auth/services/auth-guard.service';
import {PublicViewComponent} from './public-view/public-view.component';
import {AdminViewModule} from './admin-view/admin-view.module';
import {LoginComponent} from './admin-view/login/login.component';
import {AuthInterceptorService} from './auth/services/auth-interceptor.service';
import {AdminViewComponent} from './admin-view/admin-view.component';

const routes: Routes = [
  {
    path: '', component: PublicViewComponent, children: [
      {path: '', component: HomeComponent},
      // {path: 'projekty', component: ProjectsComponent},
      // {path: 'projekty/:id', component: ProjectComponent},
    ]
  },
  {path: 'auth', component: LoginComponent},
  {
    path: 'admin',
    component: AdminViewComponent,
    canActivate: [AuthGuardService],
    children: [
      // {path: 'projekty', component: ProjectsComponent, data: {section: 'projects'}}
    ]
  },
  {path: 'auth/home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    PublicViewComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    IvyGalleryModule,
    AdminViewModule,
    RouterModule.forRoot(routes),
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
