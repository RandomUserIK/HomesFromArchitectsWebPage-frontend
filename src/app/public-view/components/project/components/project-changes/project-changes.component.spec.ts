import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectChangesComponent} from './project-changes.component';

describe('ProjectChangesComponent', () => {
  let component: ProjectChangesComponent;
  let fixture: ComponentFixture<ProjectChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectChangesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
