import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {DataField} from '../../models/data-field';
import {FormControl, FormGroup} from '@angular/forms';
import {EndpointConfigData} from '../../../../configuration/models/enpoint-config-data';
import {environment} from '../../../../../environments/environment';
import {ImageService} from '../../../../services/image.service';
import {FileUploadValidationService} from '../../services/file-upload-validation.service';

@Component({
  selector: 'app-file-field',
  templateUrl: './image-field.component.html'
})
export class ImageFieldComponent implements OnInit {

  @Input() dataField: DataField;
  @Input() form: FormGroup;
  @ViewChild('fileInput', {static: false}) inputFileRef: ElementRef;
  public touched = false;
  public imageUrl: string;
  public errorMessage: string = null;
  private resource: EndpointConfigData;

  constructor(private _imageService: ImageService, private _fileUploadValidationService: FileUploadValidationService) {
    this.resource = environment.providers.resources.find(resource => resource.name === 'image-endpoint');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setControl(this.dataField.formControlName, new FormControl(null, this.dataField.validator));
      this.form.get(this.dataField.formControlName).valueChanges.subscribe(
        (imageFile: Blob) => {
          if (imageFile === null) {
            this.resetDataField();
          } else {
            this.displayImage(imageFile);
          }
        })
    });
  }

  public onFileSelect($event): void {
    if ($event.target.files && $event.target.files[0]) {
      this.errorMessage = this._fileUploadValidationService.checkSizeAndFileFormat($event.target.files[0]);
      if (this.errorMessage !== null) {
        return;
      }
      this.form.controls[this.dataField.formControlName].setValue($event.target.files[0]);
    }
  }

  private displayImage(imageFile: File | Blob): void {
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    }
  }

  private resetDataField(): void {
    this.inputFileRef.nativeElement.value = '';
    this.imageUrl = undefined;
    this.touched = false;
  }

}
