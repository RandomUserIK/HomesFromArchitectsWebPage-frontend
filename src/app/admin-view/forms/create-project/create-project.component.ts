import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CreateProjectService} from '../services/create-project.service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  public createProjectForm: FormGroup;
  public validationSucces: boolean = false;
  public validationFailed: boolean = false;
  public submitted: boolean = false;

  constructor(private _formBuilder: FormBuilder, private httpClient: HttpClient, private createProjectService: CreateProjectService) {
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
      this.validationSucces = true;
      this.validationFailed = false;
      this.createProjectService.createProject(this.createProjectForm,"COMMON");

    } else {
      this.validationFailed = true;
      this.validationSucces = false;
    }
    this.submitted = true;
  }

  formInitialized(name: string, form: FormGroup) {
    this.createProjectForm.setControl(name, form);
  }

}
