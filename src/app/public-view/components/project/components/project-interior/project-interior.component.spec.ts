import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectInteriorComponent} from './project-interior.component';

describe('ProjectInteriorComponent', () => {
  let component: ProjectInteriorComponent;
  let fixture: ComponentFixture<ProjectInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectInteriorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
