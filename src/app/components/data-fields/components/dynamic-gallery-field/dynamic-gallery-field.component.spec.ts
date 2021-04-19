import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicGalleryFieldComponent } from './dynamic-gallery-field.component';

describe('FormDynamicGaleryComponent', () => {
  let component: DynamicGalleryFieldComponent;
  let fixture: ComponentFixture<DynamicGalleryFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicGalleryFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicGalleryFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
