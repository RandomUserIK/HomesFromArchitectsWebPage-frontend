import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicTextSectionComponent } from './form-dynamic-text-section.component';

describe('FormDynamicTextSectionComponent', () => {
  let component: FormDynamicTextSectionComponent;
  let fixture: ComponentFixture<FormDynamicTextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDynamicTextSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicTextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
