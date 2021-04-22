import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ORDER_DATA_FIELDS_CONFIG} from './resources/order-data-fields-injectable';
import {DataGroupMap} from '../../../../../components/data-fields/models/data-group-map';
import {OrderFormService} from './services/order-form.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  public form: FormGroup;
  public loading = false;
  public validationSuccess: boolean;
  public uploadMessage: string;


  constructor(private formBuilder: FormBuilder,
              private orderFormService: OrderFormService,
              @Inject(ORDER_DATA_FIELDS_CONFIG) public orderDataFieldsConfig: DataGroupMap) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
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
      });
  }


}
