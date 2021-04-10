import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsComponent} from './contacts.component';
import { ContactEmailFormComponent } from './contact-email-form/contact-email-form.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ContactsComponent,
    ContactEmailFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactsComponent
  ]
})
export class ContactsModule { }
