import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-dynamic-galery',
  templateUrl: './form-dynamic-galery.component.html',
  styleUrls: ['./form-dynamic-galery.component.scss']
})
export class FormDynamicGaleryComponent implements OnInit {

  @Output() formReady = new EventEmitter<FormGroup>();
  public form: FormGroup;
  galeryPreviews: Array<string | ArrayBuffer> = [];
  @Input() submitted : boolean;

  constructor(private fb: FormBuilder) {
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      photoGallery: this.fb.array([],[Validators.minLength(1),Validators.required])
    });
    this.formReady.emit(this.form);
  }

  public handleFileInput(event: any): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (fileReaderEvent) => {
        (this.form.get('photoGallery') as FormArray).push(this.fb.control({path: event.target.files[0]}));
        this.galeryPreviews.push(fileReaderEvent.target.result);
      };
    }
  }

  public deletePhotoFromGalery(index: number) {
    (this.form.get('photoGallery') as FormArray).removeAt(index);
    this.galeryPreviews.splice(index, 1);
  }
}
