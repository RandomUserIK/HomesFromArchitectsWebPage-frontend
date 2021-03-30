import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfigurationService} from '../configuration/services/configuration-service';
import {RouterModule, Routes} from '@angular/router';
import {AdminHeaderComponent} from './components/admin-header/admin-header.component';
import {AdminViewComponent} from './admin-view.component';
import {AbstractProductsListComponent} from './components/abstract-products-list/abstract-products-list.component';
import {ProductListService} from './services/product-list-service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchComponent} from './components/search/search.component';
import {AuthGuardService} from '../auth/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminViewComponent,
    canActivate: [AuthGuardService],
    children: [
      {path: ':id', component: AbstractProductsListComponent}
    ]
  }
]

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AdminViewComponent,
    AbstractProductsListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgbPaginationModule
  ],
  providers: [
    ConfigurationService,
    ProductListService
  ]
})
export class AdminViewModule {
}
