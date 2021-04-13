import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CreateCommonProjectService} from '../services/create-common-project.service';
import {FormMultichoiceData} from '../resources/form-data';
import formData from '../resources/create-project-data.json';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-common-project.component.html',
  styleUrls: ['./create-common-project.component.scss']
})
export class CreateCommonProjectComponent implements OnInit {
  public createProjectForm: FormGroup;
  public validationSucces = false;
  public uploadMessage = '';
  public submitted = false;

  constructor(private _formBuilder: FormBuilder,
              private httpClient: HttpClient,
              private createCommonProjectService: CreateCommonProjectService) {
  }

  ngOnInit() {
    this.createProjectForm = this._formBuilder.group({});
  }

  get formControls(): { [p: string]: AbstractControl } {
    return this.createProjectForm.controls;
  }

  // TODO:Tu bude redirect s info hlaskou
  submit() {
    if (this.createProjectForm.valid) {
      this.createCommonProjectService.createProject(this.createProjectForm, 'COMMON').subscribe(() => {
        this.validationSucces = true;
        this.uploadMessage = 'Projekt úspešne vytvorený';
      }, () => {
        this.validationSucces = false;
        this.uploadMessage = 'Projekt sa nepodarilo vytvoriť, skúste neskôr';
      });
    } else {
      this.validationSucces = false;
      this.uploadMessage = 'Niektoré polia niesu správne vyplnené';
    }
    this.submitted = true;
  }

  formInitialized(name: string, form: FormGroup) {
    this.createProjectForm.setControl(name, form);
  }

  public createMultichoiceFields() : FormMultichoiceData[]{
    const multichoiceData = []
    formData.multichoiceFields.forEach(row => {
      row.forEach(multichoice => {
        multichoiceData.push( multichoice as FormMultichoiceData)
      })
    })
    return multichoiceData;
  }
}
