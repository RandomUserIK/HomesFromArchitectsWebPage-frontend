import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonProjectPriceComparisonComponent} from './common-project-price-comparison.component';

describe('CommonProjectPriceComparisonComponent', () => {
  let component: CommonProjectPriceComparisonComponent;
  let fixture: ComponentFixture<CommonProjectPriceComparisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonProjectPriceComparisonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProjectPriceComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
