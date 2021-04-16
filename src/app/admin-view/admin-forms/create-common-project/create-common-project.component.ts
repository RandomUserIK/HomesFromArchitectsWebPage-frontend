import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CreateCommonProjectService} from '../services/create-common-project.service';
import {FormField} from '../../../components/form-fields/models/form-data';
import formData from '../resources/test.json';
import {DataField} from '../../../components/form-fields/models/data-field';



@Component({
  selector: 'app-create-project',
  templateUrl: './create-common-project.component.html',
  styleUrls: ['./create-common-project.component.scss']
})
export class CreateCommonProjectComponent implements OnInit {
  public form: FormGroup;
  public validationSuccess = false;
  public uploadMessage = '';
  public submitted = false;

  constructor(private fb: FormBuilder,
              private httpClient: HttpClient,
              private createCommonProjectService: CreateCommonProjectService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      textFields: new FormGroup({})
    });
    for (const [formGroupName, formControls] of Object.entries(formData)) {
      const subForm = this.fb.group({});
      for (const formControl of formControls) {
        subForm.setControl(formControl.formControlName, new FormControl())
      }
    }
  }

  get formControls(): { [p: string]: AbstractControl } {
    return this.form.controls;
  }

  // TODO:Tu bude redirect s info hlaskou
  submit() {
    // if (this.form.valid) {
    //   this.createCommonProjectService.createProject(this.form, 'COMMON').subscribe(() => {
    //     this.validationSuccess = true;
    //     this.uploadMessage = 'Projekt bol úspešne vytvorený';
    //   }, () => {
    //     this.validationSuccess = false;
    //     this.uploadMessage = 'Projekt sa nepodarilo vytvoriť, skúste neskôr';
    //   });
    // } else {
    //   this.validationSuccess = false;
    //   this.uploadMessage = 'Niektoré polia niesú správne vyplnené';
    // }
    this.submitted = true;
    console.log(this.form.value);
  }

  public formInitialized(name: string, form: FormGroup) {
    this.form.setControl(name, form);
  }

  public getFormGroup(id: string): DataField[] {
    return formData[id];
  }

  private initFormControls() {


    // this.form = this.fb.group({});
    // this.formData.forEach(control => {
    //     this.form.addControl(
    //       control.formControlName,
    //       this.fb.array([], [Validators.minLength(1), Validators.required])
    //     );
    //   }
    // );
    //
    // const formControls: { [key: string]: AbstractControl } = {};
    // for (const filter of formData['0']) {
    //   formControls[filter.formControlName] = new FormControl();
    // }
    // this.createProjectForm.setControl(formControls);
  }

}
