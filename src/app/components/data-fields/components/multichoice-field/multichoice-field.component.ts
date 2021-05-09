import {Component, Input, OnInit} from '@angular/core';
import {DataField} from '../../models/data-field';
import {AbstractControl, FormArray, FormControl, FormGroup} from '@angular/forms';

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
        this.dataField.formControlName, new FormGroup(this.initializeValues())
      );
      this.form.get(this.dataField.formControlName).valueChanges.subscribe((value) => {

      });
    });
  }

  private initializeValues(): { [key: string]: AbstractControl } {
    const formControls: { [key: string]: AbstractControl } = {};
    for (const value of this.dataField.values) {
      formControls[value] = new FormControl(false);
    }
    return formControls;
  }

}
