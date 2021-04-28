import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IndividualProjectImageGalleryComponent} from './individual-project-image-gallery.component';

describe('IndividualProjectImageGalleryComponent', () => {
  let component: IndividualProjectImageGalleryComponent;
  let fixture: ComponentFixture<IndividualProjectImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualProjectImageGalleryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualProjectImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
