import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CreateCommonProjectService} from '../services/create-common-project.service';
import {FormField} from '../../../components/form-fields/models/form-data';
import formData from '../resources/create-project-data.json';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-common-project.component.html',
  styleUrls: ['./create-common-project.component.scss']
})
export class CreateCommonProjectComponent implements OnInit {
  public createProjectForm: FormGroup;
  public validationSuccess = false;
  public uploadMessage = '';
  public submitted = false;

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private createCommonProjectService: CreateCommonProjectService) {
  }

  ngOnInit() {
    this.createProjectForm = this.formBuilder.group({});
  }

  get formControls(): { [p: string]: AbstractControl } {
    return this.createProjectForm.controls;
  }

  // TODO:Tu bude redirect s info hlaskou
  onSubmit(): void {
    if (this.createProjectForm.valid) {
      this.createCommonProjectService.createProject(this.createProjectForm, 'COMMON').subscribe(() => {
        this.validationSuccess = true;
        this.uploadMessage = 'Projekt bol úspešne vytvorený';
      }, () => {
        this.validationSuccess = false;
        this.uploadMessage = 'Projekt sa nepodarilo vytvoriť, skúste neskôr';
      });
    } else {
      this.validationSuccess = false;
      this.uploadMessage = 'Niektoré polia niesú správne vyplnené';
    }
    this.submitted = true;
  }

  public formInitialized(name: string, form: FormGroup): void {
    this.createProjectForm.setControl(name, form);
  }

  public getFormData(id: string): FormField[] {
    return formData[id];
  }

}
