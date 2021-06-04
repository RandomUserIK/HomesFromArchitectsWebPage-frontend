import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../auth/services/auth-guard.service';
import {AdminViewComponent} from './admin-view.component';
import {AdminBlogArticlesGalleryComponent} from './components/admin-blog-articles-gallery/admin-blog-articles-gallery.component';
import {AdminBlogArticlesGalleryModule} from './components/admin-blog-articles-gallery/admin-blog-articles-gallery.module';
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
        data: {projectsTitle: 'Individuálne projekty', projectCategory: 'INDIVIDUAL'}
      },
      {
        path: 'katalogove-projekty',
        component: AdminProjectsGalleryComponent,
        data: {projectsTitle: 'Katalógové projekty', projectCategory: 'COMMON'}
      },
      {
        path: 'interierovy-dizajn',
        component: AdminProjectsGalleryComponent,
        data: {projectsTitle: 'Interiérový dizajn', projectCategory: 'INTERIOR_DESIGN'}
      },
      {
        path: 'vytvor',
        component: CreateProjectComponent
      },
      {
        path: 'blog',
        component: AdminBlogArticlesGalleryComponent
      },
      {
        path: 'blog/prispevok',
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
    AdminBlogModule,
    AdminBlogArticlesGalleryModule
  ]
})
export class AdminViewModule {
}
