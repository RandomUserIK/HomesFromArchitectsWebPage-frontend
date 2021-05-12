import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCustomerRequestComponent } from './project-customer-request.component';

describe('ProjectCustomerRequestComponent', () => {
  let component: ProjectCustomerRequestComponent;
  let fixture: ComponentFixture<ProjectCustomerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCustomerRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCustomerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
