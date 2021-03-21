import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeModule} from './public-view/home/home.module';
import {HttpClientModule} from '@angular/common/http';
import {FooterComponent} from './footer/footer.component';
import {IvyGalleryModule} from 'angular-gallery';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./public-view/home/home.component";
import {ProjectsComponent} from './projects/projects/projects.component';
import {ProjectComponent} from './projects/project/project.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthGuardService} from "./auth/services/auth-guard.service";
import {PublicViewComponent} from './public-view/public-view.component';
import {AdminViewComponent} from './admin-view/admin-view.component';

const routes: Routes = [
  {
    path: '', component: PublicViewComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'projekty', component: ProjectsComponent},
      {path: 'projekty/:id', component: ProjectComponent},
    ]
  },
  {path: 'auth', component: AdminViewComponent},
  {path: 'auth/home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ProjectComponent,
    NotFoundComponent,
    PublicViewComponent,
    AdminViewComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    HttpClientModule,
    IvyGalleryModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
