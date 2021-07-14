import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {AnimateModule} from '../../../animate/animate.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    AnimateModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule {
}
