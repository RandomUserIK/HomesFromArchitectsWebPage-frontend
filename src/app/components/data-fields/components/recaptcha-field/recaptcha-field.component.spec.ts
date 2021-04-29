import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecaptchaFieldComponent } from './recaptcha-field.component';

describe('RecaptchaFieldComponent', () => {
  let component: RecaptchaFieldComponent;
  let fixture: ComponentFixture<RecaptchaFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecaptchaFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecaptchaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
