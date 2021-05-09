import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CreateCommonProjectService} from './services/create-common-project.service';
import {DataGroupMap} from '../../../components/data-fields/models/data-group-map';
import {ActivatedRoute} from '@angular/router';
import {PROJECT_DATA_FIELDS_CONFIG} from './resources/project-data-fields-injectable';
import {Project} from '../../../models/project/project.model';
import {CreateProjectFormInitializerService} from './services/create-project-form-initializer.service';


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

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private createCommonProjectService: CreateCommonProjectService,
              private createProjectFormInitializerService: CreateProjectFormInitializerService,
              @Inject(PROJECT_DATA_FIELDS_CONFIG) public dataFields: DataGroupMap) {
    this.projectType = this.activatedRoute.snapshot.queryParams.projectType;
  }

  ngOnInit() {
    this.form = this.fb.group({});
    // this.form.valueChanges.subscribe(value => console.log(value));
  }

  ngAfterViewInit() {
    if (history.state.projectData) {
      this.initDataFields(history.state.projectData);
    }
  }


  // TODO:Tu bude redirect s info hlaskou
  public onSubmit(): void {
    this.loading = true;
    if (this.form.valid) {
      this.createCommonProjectService.createProject(
        this.form, this.dataFields[this.projectType], this.projectType
      ).subscribe((val) => {
        this.loading = false;
        this.form.reset();
        this.uploadMessage = 'Projekt bol úspešne vytvorený';
      }, (err) => {
        this.loading = false;
        this.uploadMessage = 'Projekt sa nepodarilo vytvoriť, skúste neskôr';
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    } else {
      this.loading = false;
      this.uploadMessage = 'Niektoré polia niesú správne vyplnené';
    }
  }

  private initDataFields(project: Project): void {
    setTimeout(() => {
      this.createProjectFormInitializerService.initialize(this.dataFields[this.projectType], this.form, project);
    })
  }


}
