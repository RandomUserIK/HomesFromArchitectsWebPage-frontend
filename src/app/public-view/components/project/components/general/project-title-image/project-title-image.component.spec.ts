import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectTitleImageComponent} from './project-title-image.component';

describe('ProjectTitleImageComponent', () => {
  let component: ProjectTitleImageComponent;
  let fixture: ComponentFixture<ProjectTitleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectTitleImageComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTitleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
