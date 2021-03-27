import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConfigurationService} from '../configuration/services/configuration-service';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {AdminViewComponent} from './admin-view.component';
import { IndividualProjectsComponent } from './individual-projects/individual-projects.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminHeaderComponent,
    AdminViewComponent,
    IndividualProjectsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    AdminHeaderComponent,
    AdminViewComponent
  ],
  providers: [
    ConfigurationService
  ]
})
export class AdminViewModule {
}
