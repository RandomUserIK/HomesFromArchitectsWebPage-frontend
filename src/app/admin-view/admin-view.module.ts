import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfigurationService} from '../configuration/services/configuration-service';
import {LoginComponent} from './login/login.component';
import {RouterModule} from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import {CreateProjectService} from './forms/services/create-project.service';


@NgModule({
  declarations: [
    LoginComponent,
    AdminHeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
    AdminHeaderComponent
  ],
  providers: [
    CreateProjectService,
    ConfigurationService
  ]
})
export class AdminViewModule {
}
