import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectImageCarouselComponent} from './project-image-carousel.component';

describe('ProjectImageCarouselComponent', () => {
  let component: ProjectImageCarouselComponent;
  let fixture: ComponentFixture<ProjectImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectImageCarouselComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
