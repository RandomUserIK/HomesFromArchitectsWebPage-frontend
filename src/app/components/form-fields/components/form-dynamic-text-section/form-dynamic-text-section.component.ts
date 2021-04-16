import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataField} from '../../models/data-field';

@Component({
  selector: 'app-form-dynamic-text-section',
  templateUrl: './form-dynamic-text-section.component.html',
  styleUrls: ['./form-dynamic-text-section.component.scss']
})
export class FormDynamicTextSectionComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() dataField: DataField;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.setControl(
          this.dataField.formControlName,
          this.fb.array(
            [],
            [Validators.minLength(1)]),
      );
  }

  private createTextSection(): FormGroup {
    return this.fb.group({
      title: [null, Validators.required],
      text: [null, Validators.required]
    });
  }

  public addNewTextSection(): void {
    (this.form.get(this.dataField.formControlName) as FormArray).push(this.createTextSection()); // NOSONAR
  }

  public getFormGroups(): FormGroup[] {
    return (this.form.get(this.dataField.formControlName) as FormArray).controls as FormGroup[]; // NOSONAR
  }

  public deleteNewTextSection(index: number): void {
    (this.form.get(this.dataField.formControlName) as FormArray).removeAt(index); // NOSONAR
  }

}
