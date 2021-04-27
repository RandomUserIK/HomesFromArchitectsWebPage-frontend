import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ORDER_DATA_FIELDS_CONFIG} from './resources/order-data-fields-injectable';
import {DataGroupMap} from '../../../../../components/data-fields/models/data-group-map';
import {OrderFormService} from './services/order-form.service';
import {RECAPTCHA_KEY_INJECTABLE} from '../../../../../configuration/resources/recaptcha-key-injectable';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html'
})
export class OrderFormComponent implements OnInit {

  public form: FormGroup;
  public loading = false;
  public validationSuccess: boolean;
  public uploadMessage: string;


  constructor(private formBuilder: FormBuilder,
              private orderFormService: OrderFormService,
              @Inject(ORDER_DATA_FIELDS_CONFIG) public orderDataFieldsConfig: DataGroupMap,
              @Inject(RECAPTCHA_KEY_INJECTABLE) public recaptchaKey: string) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      recaptchaToken: new FormControl(null, Validators.required)
    });
  }

  onSubmit(): void {
    this.loading = true;

    this.orderFormService.createOrder(this.form.value).subscribe(
      () => {
        this.form.reset();
        this.validationSuccess = true;
        this.loading = false;
        this.uploadMessage = 'Objednávku sa podarilo úspešne odoslať';
      },
      () => {
        this.validationSuccess = false;
        this.loading = false;
        this.uploadMessage = 'Objednávku sa nepodarilo odoslať';
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
  }

}