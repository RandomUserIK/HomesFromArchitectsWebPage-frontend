import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTextSectionFieldComponent } from './dynamic-text-section-field.component';

describe('FormDynamicTextSectionComponent', () => {
  let component: DynamicTextSectionFieldComponent;
  let fixture: ComponentFixture<DynamicTextSectionFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTextSectionFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTextSectionFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
