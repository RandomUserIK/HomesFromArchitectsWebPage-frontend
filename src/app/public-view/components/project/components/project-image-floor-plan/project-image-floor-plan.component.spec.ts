import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectImageFloorPlanComponent} from './project-image-floor-plan.component';

describe('ProjectImageFloorPlanComponent', () => {
  let component: ProjectImageFloorPlanComponent;
  let fixture: ComponentFixture<ProjectImageFloorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectImageFloorPlanComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectImageFloorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
