import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectCustomizedProposalComponent} from './project-customized-proposal.component';

describe('ProjectCustomizedProposalComponent', () => {
  let component: ProjectCustomizedProposalComponent;
  let fixture: ComponentFixture<ProjectCustomizedProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectCustomizedProposalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCustomizedProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
