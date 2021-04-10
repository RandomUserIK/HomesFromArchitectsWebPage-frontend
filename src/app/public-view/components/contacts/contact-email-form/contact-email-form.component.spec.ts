import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEmailFormComponent } from './contact-email-form.component';

describe('ContactEmailFormComponent', () => {
  let component: ContactEmailFormComponent;
  let fixture: ComponentFixture<ContactEmailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactEmailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactEmailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
