import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataField} from '../../models/data-field';

@Component({
  selector: 'app-dynamic-text-section-field',
  templateUrl: './dynamic-text-section-field.component.html',
  styleUrls: ['./dynamic-text-section-field.component.scss']
})
export class DynamicTextSectionFieldComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() dataField: DataField;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.setControl(
          this.dataField.formControlName,
          this.fb.array([]),
      );
  }

  private createTextSection(): FormGroup {
    return this.fb.group({
      title: [null, [Validators.required,Validators.maxLength(100)]],
      text: [null, [Validators.required,Validators.maxLength(800)]]
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
