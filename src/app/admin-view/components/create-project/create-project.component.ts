import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CreateProjectService} from './services/create-project.service';
import {DataGroupMap} from '../../../components/data-fields/models/data-group-map';
import {ActivatedRoute} from '@angular/router';
import {PROJECT_DATA_FIELDS_CONFIG} from './resources/project-data-fields-injectable';
import {Project} from '../../../models/project/project.model';
import {CreateProjectFormInitializerService} from './services/create-project-form-initializer.service';
import {AutoScrollService} from '../../../services/auto-scroll.service';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit, AfterViewInit {

  public form: FormGroup;
  public loading = false;
  public uploadMessage = '';
  public projectCategory: string;
  public validationSuccess: boolean;
  public title = '';
  public projectId: number;

  constructor(private _autoScrollService: AutoScrollService,
              private _activatedRoute: ActivatedRoute,
              private _httpClient: HttpClient,
              private _createCommonProjectService: CreateProjectService,
              private _createProjectFormInitializerService: CreateProjectFormInitializerService,
              @Inject(PROJECT_DATA_FIELDS_CONFIG) public dataFields: DataGroupMap) {
    this.projectCategory = this._activatedRoute.snapshot.queryParams.projectCategory;
  }

  ngOnInit(): void {
    this.resolveTitle();
    this.form = new FormGroup({});
  }

  ngAfterViewInit(): void {
    if (history.state.projectData) {
      this.initDataFields(history.state.projectData);
    }
  }

  public onSubmit(): void {
    this.loading = true;
    if (this.form.valid) {
      this._createCommonProjectService.submitProject(
        this.form, this.dataFields[this.projectCategory], this.projectCategory, this.projectId
      ).subscribe(() => {
        this.loading = false;
        this.form.reset();
        this.validationSuccess = true;
        this.uploadMessage = 'Projekt bol úspešne odoslaný';
      }, () => {
        this.loading = false;
        this.uploadMessage = 'Projekt sa nepodarilo vytvoriť, skúste neskôr';
      });
    } else {
      this.loading = false;
      this.uploadMessage = 'Niektoré polia niesú správne vyplnené';
    }
    this._autoScrollService.scrollToTop();
  }

  private resolveTitle(): void {
    if (this.projectCategory === 'COMMON') {
      this.title = 'Katalógový projekt';
    } else if (this.projectCategory === 'INDIVIDUAL') {
      this.title = 'Individuálny projekt';
    } else {
      this.title = 'Interierový projekt';
    }
  }

  private initDataFields(project: Project): void {
    setTimeout(() => {
      this.projectId = project.id;
      this._createProjectFormInitializerService.initialize(this.dataFields[this.projectCategory], this.form, project);
    });
  }

}
