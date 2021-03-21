import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {ConfigurationService} from '../configuration/services/configuration-service';
import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './authentication/services/authentication.service';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthenticationService,
    ConfigurationService
  ]
})
export class AdminModule {
}
