import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminViewComponent} from './admin-view.component';
import {AdminProjectsGalleryComponent} from './components/admin-projects-gallery/admin-projects-gallery.component';
import {AuthGuardService} from '../auth/services/auth-guard.service';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfigurationService} from '../configuration/services/configuration-service';
import {CreateProjectComponent} from './components/create-project/create-project.component';
import {CreateProjectModule} from './components/create-project/create-project.module';
import {AdminProjectsGalleryModule} from './components/admin-projects-gallery/admin-projects-gallery.module';

const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'individualne-projekty',
        component: AdminProjectsGalleryComponent,
        data: {projectsTitle: 'Individuálne projekty', projectsCategoryId: 'INDIVIDUAL'},
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
      }
    ]
  },
]

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
    AdminProjectsGalleryModule
  ],
  providers: [
    ConfigurationService
  ]
})
export class AdminViewModule {
}
