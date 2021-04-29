import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormWrapperComponent } from './contact-form-wrapper.component';

describe('ContactsComponent', () => {
  let component: ContactFormWrapperComponent;
  let fixture: ComponentFixture<ContactFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
