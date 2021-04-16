import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileUploadValidationService} from '../services/file-upload-validation.service';
import {DataField} from '../../models/data-field';

@Component({
  selector: 'app-form-dynamic-gallery',
  templateUrl: './form-dynamic-gallery.component.html',
  styleUrls: ['./form-dynamic-gallery.component.scss']
})
export class FormDynamicGalleryComponent implements OnInit {


  @Input() dataField: DataField;
  @Input() form: FormGroup;
  public galleryPreviews: Array<string | ArrayBuffer> = [];
  public errorMessage = '';

  constructor(private fb: FormBuilder, private fileUploadValidationService: FileUploadValidationService) {
  }

  ngOnInit(): void {
    this.form.setControl(
      this.dataField.formControlName,
      this.fb.array([], [Validators.minLength(1)]));
  }

  public handleFileInput(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.errorMessage = this.fileUploadValidationService.checkSizeAndFileFormat(event.target.files[0]);
      if (this.errorMessage.length === 0) {
        this.errorMessage = '';
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (fileReaderEvent) => {
          (this.form.get(this.dataField.formControlName) as FormArray)
            .push(this.fb.control({path: event.target.files[0]})); // NOSONAR
          this.galleryPreviews.push(fileReaderEvent.target.result);
        };
      }
    }
  }

  public deletePhotoFromGallery(index: number): void {
    (this.form.get(this.dataField.formControlName) as FormArray).removeAt(index); // NOSONAR
    this.galleryPreviews.splice(index, 1);
  }

}

