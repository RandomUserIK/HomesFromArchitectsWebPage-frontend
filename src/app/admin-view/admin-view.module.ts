import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth/services/auth-guard.service';
import {AdminViewComponent} from './admin-view.component';
import {AdminBlogComponent} from './components/admin-blog/admin-blog.component';
import {AdminBlogModule} from './components/admin-blog/admin-blog.module';
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminProjectsGalleryComponent} from './components/admin-projects-gallery/admin-projects-gallery.component';
import {AdminProjectsGalleryModule} from './components/admin-projects-gallery/admin-projects-gallery.module';
import {CreateProjectComponent} from './components/create-project/create-project.component';
import {CreateProjectModule} from './components/create-project/create-project.module';

const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'individualne-projekty',
        component: AdminProjectsGalleryComponent,
        data: {projectsTitle: 'Individuálne projekty', projectsCategoryId: 'INDIVIDUAL'}
      },
      {
        path: 'katalogove-projekty',
        component: AdminProjectsGalleryComponent,
        data: {projectsTitle: 'Katalógové projekty', projectsCategoryId: 'COMMON'}
      },
      {
        path: 'interierovy-dizajn',
        component: AdminProjectsGalleryComponent,
        data: {projectsTitle: 'Interiérový dizajn', projectsCategoryId: 'INTERIOR_DESIGN'}
      },
      {
        path: 'vytvor',
        component: CreateProjectComponent
      },
      {
        path: 'blog',
        component: AdminBlogComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    CreateProjectModule,
    AdminProjectsGalleryModule,
    AdminBlogModule
  ]
})
export class AdminViewModule {
}
