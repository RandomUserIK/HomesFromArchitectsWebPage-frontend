import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormFileData} from '../../models/form-data';
import {FormValidationService} from '../services/form-validation.service';

@Component({
  selector: 'app-form-file',
  templateUrl: './form-file.component.html',
  styleUrls: ['./form-file.component.scss']
})
export class FormFileComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  @Input() submitted: boolean;
  @Input() formData: FormFileData[];
  public form: FormGroup;
  public errorMessage = '';


  constructor(private fb: FormBuilder, private formValidationService: FormValidationService) {
  }

  ngOnInit() {
    this.form = this.fb.group({});
    this.formData.forEach(control => {
          this.form.addControl(control.formControlName, this.fb.control('', Validators.required));
    });

    this.formReady.emit(this.form);
  }

  public handleFileInput(event: any, fileData: FormFileData): void {
    if (event.target.files && event.target.files[0]) {
      this.errorMessage = this.formValidationService.checkSizeAndFileFormat(event.target.files[0]);
      if (this.errorMessage.length === 0) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (fileReaderEvent) => {
          this.formData.find(value => {
            if (value === fileData) {
              value.imgSrc = fileReaderEvent.target.result;
            }
          });
          this.form.controls[fileData.formControlName].setValue(event.target.files[0]);
        };
      }
    }
  }

}
