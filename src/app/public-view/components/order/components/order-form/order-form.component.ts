import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ORDER_DATA_FIELDS_CONFIG} from './resources/order-data-fields-injectable';
import {DataGroupMap} from '../../../../../components/data-fields/models/data-group-map';
import {OrderFormService} from './services/order-form.service';
import {RECAPTCHA_KEY_INJECTABLE} from '../../../../../configuration/resources/recaptcha-key-injectable';
import {DataField} from '../../../../../components/data-fields/models/data-field';
import {AutoScrollService} from '../../../../../services/auto-scroll.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent implements OnInit {

  public form: FormGroup;
  private submitButtonField: DataField;
  public loading = false;
  public validationSuccess: boolean;
  public uploadMessage: string;


  constructor(private autoScrollService: AutoScrollService,
              private orderFormService: OrderFormService,
              @Inject(ORDER_DATA_FIELDS_CONFIG) public orderDataFieldsConfig: DataGroupMap,
              @Inject(RECAPTCHA_KEY_INJECTABLE) public recaptchaKey: string) {
  }

  ngOnInit(): void {
    this.submitButtonField = this.orderDataFieldsConfig.thirdSection.find(field => field.formControlName === 'submitButton');
    this.form = new FormGroup({});
  }

  onSubmit(): void {
    this.loading = true;
    this.submitButtonField.loading = true;
    this.orderFormService.createOrder(this.form.value).subscribe(
      () => {
        this.form.reset();
        this.validationSuccess = true;
        this.loading = false;
        this.uploadMessage = 'Objednávku sa podarilo úspešne odoslať';
        this.submitButtonField.loading = false;
        this.autoScrollService.scrollToTop();
      },
      () => {
        this.validationSuccess = false;
        this.loading = false;
        this.uploadMessage = 'Objednávku sa nepodarilo odoslať';
        this.submitButtonField.loading = false;
        this.autoScrollService.scrollToTop();
      });
  }

}
