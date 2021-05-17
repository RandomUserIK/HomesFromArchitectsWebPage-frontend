import {Component, Input, OnInit} from '@angular/core';
import {DataField} from '../../models/data-field';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-multichoice-field',
  templateUrl: './multichoice-field.component.html'
})
export class MultichoiceFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setControl(this.dataField.formControlName, new FormGroup(this.initializeValues()));
      this.initializeValidator();
    });
  }

  private initializeValues(): { [key: string]: AbstractControl } {
    const formControls: { [key: string]: AbstractControl } = {};
    for (const value of this.dataField.values) {
      formControls[value] = new FormControl(false);
    }
    return formControls;
  }

  private initializeValidator(): void {
    if (this.dataField.validator === Validators.required || (this.dataField.validator as ValidatorFn[])?.includes(Validators.required)) {
      this.form.get(this.dataField.formControlName).valueChanges.subscribe((choices: { [key: string]: boolean }) => {
        if (!Object.values(choices).includes(true)) {
          this.form.controls[this.dataField.formControlName].setErrors({incorrect: true});
        } else {
          this.form.controls[this.dataField.formControlName].setErrors(null);
        }
      });
    }
  }

}
