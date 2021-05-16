import {Component, Input, OnInit} from '@angular/core';
import {DataField} from '../../models/data-field';
import {FormControl, FormGroup} from '@angular/forms';
import {FileUploadValidationService} from '../../services/file-upload-validation.service';
import {ImageCompressionService} from '../../services/image-compression.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-file-field',
  templateUrl: './image-field.component.html'
})
export class ImageFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;
  public errorMessage = '';
  public touched = false;


  constructor(private fileUploadValidationService: FileUploadValidationService,
              private imageCompressService: ImageCompressionService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.dataField.imgSrc = undefined;
      this.form.setControl(this.dataField.formControlName, new FormControl(null, this.dataField.validator));
      this.form.get(this.dataField.formControlName).valueChanges.subscribe((photoFile: File) => {
        this.handleImageChange(photoFile);
      });
    })
  }

  private handleImageChange(photoFile: File): void {
    if (!photoFile) {
      this.dataField.imgSrc = undefined;
    } else {
      this.displayImage(photoFile);
    }
  }

  private displayImage(photoFile: File) {
    const reader = new FileReader();
    reader.readAsDataURL(photoFile);
    reader.onload = () => {
      this.dataField.imgSrc = this.sanitizer.bypassSecurityTrustUrl(reader.result as string)
    }
  }

  public onImageUpload(event: any, dataField: DataField): void {
    if (event.target.files && event.target.files[0]) {
      this.errorMessage = this.fileUploadValidationService.checkSizeAndFileFormat(event.target.files[0]);
      if (this.errorMessage.length === 0) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (fileReaderEvent) => {
          this.imageCompressService.compressFile(fileReaderEvent.target.result.toString(), event.target.files[0])
            .then(compressedData => {
              this.form.controls[dataField.formControlName].setValue(compressedData.file);
            });
        };
      }
    }
  }

}
