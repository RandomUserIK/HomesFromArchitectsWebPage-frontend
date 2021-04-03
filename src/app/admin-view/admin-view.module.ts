import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminViewComponent} from './admin-view.component';
import {ProjectsListComponent} from './components/projects-list/projects-list.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchComponent} from './components/search/search.component';
import {AuthGuardService} from '../auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: ':id', component: ProjectsListComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminViewComponent,
    ProjectsListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgbPaginationModule
  ]
})
export class AdminViewModule {
}
