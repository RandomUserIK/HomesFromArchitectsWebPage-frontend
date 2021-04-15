import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-dynamic-text-section',
  templateUrl: './form-dynamic-text-section.component.html',
  styleUrls: ['./form-dynamic-text-section.component.scss']
})
export class FormDynamicTextSectionComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  @Input() submitted: boolean;
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      textSections: this.fb.array([], [Validators.minLength(1), Validators.required])
    });
    this.formReady.emit(this.form);
  }

  private createTextSection(): FormGroup {
    return this.fb.group({
      title: [null, Validators.required],
      text: [null, Validators.required]
    });
  }

  public addNewTextSection(): void {
    (this.form.get('textSections') as FormArray).push(this.createTextSection()); // NOSONAR
  }

  public getFormGroups(): FormGroup[] {
    return (this.form.get('textSections') as FormArray).controls as FormGroup[]; // NOSONAR
  }

  public deleteNewTextSection(index: number): void {
    (this.form.get('textSections') as FormArray).removeAt(index); // NOSONAR
  }

}
