import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminViewComponent} from './admin-view.component';
import {AdminProjectsGalleryComponent} from './components/admin-projects-gallery/admin-projects-gallery.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuardService} from '../auth/services/auth-guard.service';
import {SearchHeaderModule} from '../components/search-header/search-header.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfigurationService} from '../configuration/services/configuration-service';
import {AdminFormModule} from './forms/admin-form.module';
import {CreateCommonProjectComponent} from './forms/create-common-project/create-common-project.component';

const routes: Routes = [
  {
    path: 'vytvor',
    component: CreateCommonProjectComponent,
    data: {}
  },
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
    ]
  },
]

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminViewComponent,
    AdminProjectsGalleryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    AdminFormModule,
    NgbPaginationModule,
    SearchHeaderModule
  ],
  providers: [
    ConfigurationService
  ]
})
export class AdminViewModule {
}
