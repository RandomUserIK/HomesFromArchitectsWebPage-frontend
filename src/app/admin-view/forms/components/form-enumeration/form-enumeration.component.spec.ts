import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEnumerationComponent } from './form-enumeration.component';

describe('FormEnumerationComponent', () => {
  let component: FormEnumerationComponent;
  let fixture: ComponentFixture<FormEnumerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEnumerationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEnumerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
