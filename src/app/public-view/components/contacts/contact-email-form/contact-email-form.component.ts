import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-email-form',
  templateUrl: './contact-email-form.component.html',
  styleUrls: ['./contact-email-form.component.scss']
})
export class ContactEmailFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telephone: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      dataPrivacyCheck: new FormControl(null, Validators.required)
    })
  }

  onSubmit() {
    console.log(this.contactForm.value)
  }
}
