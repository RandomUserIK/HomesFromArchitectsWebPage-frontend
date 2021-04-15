import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectContentTableComponent } from './project-content-table.component';

describe('ProjectContentTableComponent', () => {
  let component: ProjectContentTableComponent;
  let fixture: ComponentFixture<ProjectContentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectContentTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectContentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
