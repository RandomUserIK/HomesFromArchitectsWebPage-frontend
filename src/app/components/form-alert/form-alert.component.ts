import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-alert',
  templateUrl: './form-alert.component.html'
})
export class FormAlertComponent {

  @Input()
  uploadMessage: string;
  @Input()
  validationSuccess: boolean;

}
