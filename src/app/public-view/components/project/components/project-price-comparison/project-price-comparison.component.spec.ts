import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectPriceComparisonComponent} from './project-price-comparison.component';

describe('ProjectPriceComparisonComponent', () => {
  let component: ProjectPriceComparisonComponent;
  let fixture: ComponentFixture<ProjectPriceComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectPriceComparisonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPriceComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
