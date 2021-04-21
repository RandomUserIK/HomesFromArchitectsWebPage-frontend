import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CreateCommonProjectService} from '../services/create-common-project.service';
import {DataField} from '../../../components/data-fields/models/data-field';
import {DataGroupMap} from '../../../components/data-fields/models/data-group-map';
import {ActivatedRoute} from '@angular/router';
import {PROJECT_DATA_FIELDS_CONFIG} from '../resources/project-data-fields-injectable';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit, AfterViewInit {
  public form: FormGroup;
  public loading = false;
  public uploadMessage = '';
  public projectType: string;
  public validationSuccess: boolean;
  private pageLoaded: boolean;

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private createCommonProjectService: CreateCommonProjectService,
              @Inject(PROJECT_DATA_FIELDS_CONFIG) private commonProjectDataFields: DataGroupMap) {
    this.projectType = this.activatedRoute.snapshot.queryParams.projectType;
  }

  ngOnInit() {
    this.form = this.fb.group({});
  }


  // TODO:Tu bude redirect s info hlaskou
  public onSubmit(): void {
    this.loading = true;
    if (this.form.valid) {
      this.createCommonProjectService.createProject(
        this.form, this.commonProjectDataFields[this.projectType], this.projectType
      ).subscribe((val) => {
        console.log(val);
        this.loading = false;
        this.form.reset();
        this.uploadMessage = 'Projekt bol úspešne vytvorený';
      }, (err) => {
        console.log(err);
        this.loading = false;
        this.uploadMessage = 'Projekt sa nepodarilo vytvoriť, skúste neskôr';
      });
    } else {
      this.loading = false;
      this.uploadMessage = 'Niektoré polia niesú správne vyplnené';
    }
  }

  public getFormGroup(id: string): DataField[] {
    return this.commonProjectDataFields[id];
  }

  ngAfterViewInit(): void {
    this.pageLoaded = true;
  }

  isFormValid(): boolean {
    if (this.pageLoaded) {
      return this.form.valid;
    } else {
      return false;
    }
  }

}
