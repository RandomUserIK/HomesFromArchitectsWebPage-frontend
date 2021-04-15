import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContentTitleSectionComponent } from './project-content-title-section.component';

describe('TitleSectionComponent', () => {
  let component: ProjectContentTitleSectionComponent;
  let fixture: ComponentFixture<ProjectContentTitleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectContentTitleSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectContentTitleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
