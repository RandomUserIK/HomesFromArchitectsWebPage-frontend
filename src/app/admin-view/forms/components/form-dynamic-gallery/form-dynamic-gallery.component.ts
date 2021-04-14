import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormValidationService} from '../services/form-validation.service';

@Component({
  selector: 'app-form-dynamic-galery',
  templateUrl: './form-dynamic-gallery.component.html',
  styleUrls: ['./form-dynamic-gallery.component.scss']
})
export class FormDynamicGalleryComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  @Input() submitted: boolean;
  public errorMessage = '';
  public form: FormGroup;
  public galleryPreviews: Array<string | ArrayBuffer> = [];

  constructor(private fb: FormBuilder, private formValidationService: FormValidationService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      photoGallery: this.fb.array([], [Validators.minLength(1), Validators.required])
    });
    this.formReady.emit(this.form);
  }

  public handleFileInput(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.errorMessage = this.formValidationService.checkSizeAndFileFormat(event.target.files[0]);
      if (this.errorMessage.length === 0) {
        this.errorMessage = '';
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (fileReaderEvent) => {
          (this.form.get('photoGallery') as FormArray).push(this.fb.control({path: event.target.files[0]}));
          this.galleryPreviews.push(fileReaderEvent.target.result);
        };
      }
    }
  }

  public deletePhotoFromGallery(index: number): void {
    (this.form.get('photoGallery') as FormArray).removeAt(index);
    this.galleryPreviews.splice(index, 1);
  }
}

