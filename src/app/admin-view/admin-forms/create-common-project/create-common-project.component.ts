import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CreateCommonProjectService} from '../services/create-common-project.service';
import {DataField} from '../../../components/data-fields/models/data-field';
import {DataGroupMap} from '../../../components/data-fields/models/data-group-map';
import {COMMON_PROJECT_DATA_FIELDS_CONFIG} from '../resources/common-project-data-fields';


@Component({
  selector: 'app-create-project',
  templateUrl: './create-common-project.component.html',
  styleUrls: ['./create-common-project.component.scss']
})
export class CreateCommonProjectComponent implements OnInit, AfterViewInit {
  public form: FormGroup;
  public loading = false;
  public uploadMessage = '';
  public submitted = false;
  private pageLoaded: boolean;

  constructor(private fb: FormBuilder,
              private httpClient: HttpClient,
              private createCommonProjectService: CreateCommonProjectService,
              @Inject(COMMON_PROJECT_DATA_FIELDS_CONFIG) private commonProjectDataFields: DataGroupMap) {
  }

  ngOnInit() {
    this.form = this.fb.group({});
  }


  // TODO:Tu bude redirect s info hlaskou
  public onSubmit(): void {
    console.log(this.form.controls);

    if (this.form.valid) {
      this.createCommonProjectService.createProject(
        this.form, this.commonProjectDataFields.commonProjectDataGroup, "COMMON"
      ).subscribe(() => {
        this.loading = true;
        this.uploadMessage = 'Projekt bol úspešne vytvorený';
      }, () => {
        this.loading = false;
        this.uploadMessage = 'Projekt sa nepodarilo vytvoriť, skúste neskôr';
      });
    } else {
      this.loading = false;
      this.uploadMessage = 'Niektoré polia niesú správne vyplnené';
    }
    this.submitted = true;

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
