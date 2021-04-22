import {Component, Input, OnInit} from '@angular/core';
import {DataField} from '../../models/data-field';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-multichoice-field',
  templateUrl: './multichoice-field.component.html'
})
export class MultichoiceFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;
  public touched = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setControl(
        this.dataField.formControlName,
        new FormArray([], this.dataField.validator));
      this.form.get(this.dataField.formControlName).valueChanges.subscribe(() => {
        this.touched = true;
      });
    });
  }

  onCheckChange(event, formControlName: string): void {
    const formArray: FormArray = this.form.get(formControlName) as FormArray; // NOSONAR
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
