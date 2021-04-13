import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormMultichoiceData} from '../../resources/form-data';
import formData from '../../resources/create-project-data.json';

@Component({
  selector: 'app-form-multichoice',
  templateUrl: './form-multichoice.component.html',
  styleUrls: ['./form-multichoice.component.scss']
})
export class FormMultichoiceComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  @Input() submitted: boolean;
  public form: FormGroup;
  public controlsFromJson: FormMultichoiceData[][] = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({});
    formData.multichoiceFields.forEach(row => {
        const data = [];
        row.forEach(control => {
          this.form.addControl(control.formControlName, this.fb.array([], [Validators.minLength(1), Validators.required]));
          data.push(control as FormMultichoiceData);
        });
        this.controlsFromJson.push(data);
      }
    );
    this.formReady.emit(this.form);
  }

  onCheckChange(event, formControlName: string): void {
    const formArray: FormArray = this.form.get(formControlName) as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      formArray.controls.forEach((ctrl: FormControl, index) => {
        if (ctrl.value === event.target.value)
          return formArray.removeAt(index);
      });
    }
  }

}
