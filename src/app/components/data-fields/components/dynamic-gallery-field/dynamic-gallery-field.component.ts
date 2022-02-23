import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {FileUploadValidationService} from '../../services/file-upload-validation.service';
import {DataField} from '../../models/data-field';

@Component({
  selector: 'app-form-dynamic-gallery',
  templateUrl: './dynamic-gallery-field.component.html',
  styleUrls: ['./dynamic-gallery-field.component.scss']
})
export class DynamicGalleryFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;
  @ViewChild('fileInput', {static: false}) inputFileRef: ElementRef;
  public imageGalleryPreviews: Array<string> = [];
  public errorMessage = '';
  public touched = false;
  private isFiledDelete = false;
  private index: number;

  constructor(private _fb: FormBuilder,
              private _fileUploadValidationService: FileUploadValidationService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setControl(this.dataField.formControlName, new FormArray([], this.dataField.validator));
      this.form.get(this.dataField.formControlName).valueChanges.subscribe((files: File[]) => {
        this.touched = true;
        this.handleGalleryChange(files);
      });
    });
  }

  private handleGalleryChange(files: File[]): void {
    if (this.isFiledDelete) {
      this.deletePhotoFromGallery();
    } else {
      if (files.includes(null)) {
        this.clearGallery();
      } else if (files.length > 0) {
        this.addPhotoToGalleryPreview(files.pop());
      }
    }
  }

  private deletePhotoFromGallery(): void {
    this.imageGalleryPreviews.splice(this.index, 1);
    this.isFiledDelete = false;
  }

  private clearGallery(): void {
    (this.form.get(this.dataField.formControlName) as FormArray).clear(); // NOSONAR
    this.imageGalleryPreviews = [];
    this.touched = false;
    this.inputFileRef.nativeElement.value = '';
  }

  public handleFileInput($event: any): void {
    if ($event.target.files && $event.target.files[0]) {
      this.errorMessage = this._fileUploadValidationService.checkSizeAndFileFormat($event.target.files[0]);
      if (this.errorMessage !== null) {
        return;
      }
      (this.form.get(this.dataField.formControlName) as FormArray).push(this._fb.control($event.target.files[0])); // NOSONAR
    }
  }

  private addPhotoToGalleryPreview(file: File | Blob): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageGalleryPreviews.push(reader.result as string); // NOSONAR
    }
  }

  public onPhotoDelete(index: number): void {
    this.isFiledDelete = true;
    this.index = index;
    (this.form.get(this.dataField.formControlName) as FormArray).removeAt(index); // NOSONAR
  }

}

