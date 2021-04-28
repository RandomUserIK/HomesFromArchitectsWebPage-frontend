import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactsService} from '../services/contacts.service';
import {RECAPTCHA_KEY_INJECTABLE} from '../../../../configuration/resources/recaptcha-key-injectable';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;
  successSubmit = false;
  invalidsSubmit = false;
  loading = false;

  constructor(private _contactsService: ContactsService,
              @Inject(RECAPTCHA_KEY_INJECTABLE) public recaptchaKey) {
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      telephone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[+]([0-9]){3}( )?([0-9]){3}( )?([0-9]){3}( )?([0-9]){3}$')
      ]),
      text: new FormControl(null, Validators.required),
      dataPrivacyCheck: new FormControl(null, Validators.required),
      recaptchaToken: new FormControl(null, Validators.required)
    })
  }

  public onSubmit(): void {
    const contactForm = this.contactForm.value;
    delete contactForm.dataPrivacyCheck;
    this.loading = true;
    this._contactsService.sendForm(contactForm)
      .subscribe(
        _ => {
          this.successSubmit = true;
          this.loading = false;
          this.contactForm.reset();
        },
        _ => {
          this.invalidsSubmit = true;
          this.loading = false;
          this.contactForm.patchValue({recaptchaToken: null})
        }
      );
  }

}
