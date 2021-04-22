import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataField} from '../../../../../components/data-fields/models/data-field';
import {ORDER_DATA_FIELDS_CONFIG} from './resources/order-data-fields-injectable';
import {DataGroupMap} from '../../../../../components/data-fields/models/data-group-map';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements AfterViewInit, OnInit {

  public form: FormGroup;
  public loading = false;
  private pageLoaded: boolean = false;

  constructor(private formBuilder: FormBuilder,
              @Inject(ORDER_DATA_FIELDS_CONFIG) public orderDataFieldsConfig: DataGroupMap) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
  }

  onSubmit(): void {
    console.log(this.form);
  }


  ngAfterViewInit(): void {
    this.pageLoaded = true;
  }

  isFormValid(): boolean {
    if (this.pageLoaded) {
      return this.form.valid;
    } else {
      return false;
    }
  }

}
