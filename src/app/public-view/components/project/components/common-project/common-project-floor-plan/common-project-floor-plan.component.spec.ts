import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonProjectFloorPlanComponent} from './common-project-floor-plan.component';

describe('CommonProjectFloorPlanComponent', () => {
  let component: CommonProjectFloorPlanComponent;
  let fixture: ComponentFixture<CommonProjectFloorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonProjectFloorPlanComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProjectFloorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
