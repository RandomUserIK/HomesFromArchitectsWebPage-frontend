import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectTextSectionComponent} from './project-text-section.component';

describe('ProjectTextSectionComponent', () => {
  let component: ProjectTextSectionComponent;
  let fixture: ComponentFixture<ProjectTextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectTextSectionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
