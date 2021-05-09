import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {FileUploadValidationService} from '../../services/file-upload-validation.service';
import {DataField} from '../../models/data-field';
import {ImageCompressionService} from '../../services/image-compression.service';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-form-dynamic-gallery',
  templateUrl: './dynamic-gallery-field.component.html',
  styleUrls: ['./dynamic-gallery-field.component.scss']
})
export class DynamicGalleryFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;
  public galleryPreviews: Array<string | ArrayBuffer | SafeUrl> = [];
  public errorMessage = '';
  public touched = false;
  private isFiledDelete = false;
  private index: number;

  constructor(private fb: FormBuilder,
              private fileUploadValidationService: FileUploadValidationService,
              private imageCompressionService: ImageCompressionService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setControl(this.dataField.formControlName, new FormArray([], this.dataField.validator));

      this.form.get(this.dataField.formControlName).valueChanges.subscribe((files: File[]) => {
        if (this.isFiledDelete) {
          this.galleryPreviews.splice(this.index, 1);
          this.isFiledDelete = false;
        } else {
          if (files.includes(null)) {
            (this.form.get(this.dataField.formControlName) as FormArray).clear(); // NOSONAR
            this.galleryPreviews = [];
            return;
          }
          if (files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(files.pop());
            reader.onload = () => {
              this.galleryPreviews.push(this.sanitizer.bypassSecurityTrustUrl(reader.result as string));
            }
          }
        }
      });
    });
  }

  public handleFileInput(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.errorMessage = this.fileUploadValidationService.checkSizeAndFileFormat(event.target.files[0]);
      if (this.errorMessage.length === 0) {
        this.errorMessage = '';
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (fileReaderEvent) => {
          this.imageCompressionService.compressFile(fileReaderEvent.target.result.toString(), event.target.files[0])
            .then(compressedData => {
              (this.form.get(this.dataField.formControlName) as FormArray).push(this.fb.control(compressedData.file)); // NOSONAR
            });
        };
      }
    }
  }

  public deletePhotoFromGallery(index: number): void {
    this.isFiledDelete = true;
    this.index = index;
    (this.form.get(this.dataField.formControlName) as FormArray).removeAt(index); // NOSONAR

  }

}

