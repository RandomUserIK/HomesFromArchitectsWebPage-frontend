import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentIndividualProjectPhotosComponent } from './content-individual-project-photos.component';

describe('ContentIndividualProjectPhotosComponent', () => {
  let component: ContentIndividualProjectPhotosComponent;
  let fixture: ComponentFixture<ContentIndividualProjectPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentIndividualProjectPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentIndividualProjectPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
