import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonProjectBuildingInfoComponent} from './common-project-building-info.component';

describe('CommonProjectBuildingInfoComponent', () => {
  let component: CommonProjectBuildingInfoComponent;
  let fixture: ComponentFixture<CommonProjectBuildingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonProjectBuildingInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProjectBuildingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
