import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicGalleryComponent } from './form-dynamic-gallery.component';

describe('FormDynamicGaleryComponent', () => {
  let component: FormDynamicGalleryComponent;
  let fixture: ComponentFixture<FormDynamicGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDynamicGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
