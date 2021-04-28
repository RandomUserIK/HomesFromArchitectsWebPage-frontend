import {Component, Input, OnInit} from '@angular/core';
import {DataField} from '../../models/data-field';
import {FormControl, FormGroup} from '@angular/forms';
import {FileUploadValidationService} from '../../services/file-upload-validation.service';
import {ImageCompressionService} from '../../services/image-compression.service';

@Component({
  selector: 'app-file-field',
  templateUrl: './file-field.component.html'
})
export class FileFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;
  public errorMessage = '';
  public touched = false;


  constructor(private fileUploadValidationService: FileUploadValidationService, private imageCompressService: ImageCompressionService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setControl(this.dataField.formControlName, new FormControl(null, this.dataField.validator));
    })
  }

  public handleFileInput(event: any, fileData: DataField): void {
    if (event.target.files && event.target.files[0]) {
      this.errorMessage = this.fileUploadValidationService.checkSizeAndFileFormat(event.target.files[0]);
      if (this.errorMessage.length === 0) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (fileReaderEvent) => {
          this.imageCompressService.compressFile(fileReaderEvent.target.result, event.target.files[0])
            .then(compressedData => {
              this.dataField.imgSrc = compressedData.compressionResult;
              this.form.controls[fileData.formControlName].setValue(compressedData.file);
            });
        };
      }
    }
  }

}
