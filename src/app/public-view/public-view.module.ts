import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicViewComponent} from './public-view.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HomeModule} from './components/home/home.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectsGalleryComponent} from './components/projects-gallery/projects-gallery.component';
import {SearchHeaderComponent} from './components/search-header/search-header.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '', component: PublicViewComponent, children: [
      {path: '', component: HomeComponent},
      {path: ':id', component: ProjectsGalleryComponent},
    ]
  },
]

@NgModule({
  declarations: [
    PublicViewComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsGalleryComponent,
    SearchHeaderComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class PublicViewModule {
}
