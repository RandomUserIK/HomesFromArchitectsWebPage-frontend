import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectBuildingInfoComponent} from './project-building-info.component';

describe('ProjectBuildingInfoComponent', () => {
  let component: ProjectBuildingInfoComponent;
  let fixture: ComponentFixture<ProjectBuildingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectBuildingInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectBuildingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
