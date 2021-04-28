import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonProjectPriceInfoComponent} from './common-project-price-info.component';

describe('CommonProjectPriceInfoComponent', () => {
  let component: CommonProjectPriceInfoComponent;
  let fixture: ComponentFixture<CommonProjectPriceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonProjectPriceInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProjectPriceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
