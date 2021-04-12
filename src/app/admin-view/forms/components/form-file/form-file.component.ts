import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormFileData} from '../../resources/form-data';
import formData from '../../resources/create-project-data.json';
import {FormValidationService} from '../services/form-validation.service';

@Component({
  selector: 'app-form-file',
  templateUrl: './form-file.component.html',
  styleUrls: ['./form-file.component.scss']
})
export class FormFileComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  public form: FormGroup;
  public controlsFromJson: FormFileData[][] = [];
  @Input() submitted: boolean;
  public errorMessage = '';


  constructor(private fb: FormBuilder, private formValidationService: FormValidationService) {
  }

  ngOnInit() {
    this.form = this.fb.group({});
    formData.fileUpload.forEach(row => {
        const data = [];
        row.forEach(control => {
          this.form.addControl(control.formControlName, this.fb.control('', Validators.required));
          data.push(control as FormFileData);
        });
        this.controlsFromJson.push(data);
      }
    );
    this.formReady.emit(this.form);
  }

  public handleFileInput(event: any, fileData: FormFileData): void {
    if (event.target.files && event.target.files[0]) {
      this.errorMessage = this.formValidationService.checkSizeAndFileFormat(event.target.files[0]);
      if (this.errorMessage.length === 0) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (fileReaderEvent) => {
          this.controlsFromJson.find(value => {
            value.find(jsonValue => {
              return jsonValue === fileData;
            }).imgSrc = fileReaderEvent.target.result;
          });
          this.form.controls[fileData.formControlName].setValue(event.target.files[0]);
        };
      }
    }
  }

}
