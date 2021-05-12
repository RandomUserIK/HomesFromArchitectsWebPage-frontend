import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonProjectImageCarouselComponent} from './common-project-image-carousel.component';

describe('CommonProjectImageCarouselComponent', () => {
  let component: CommonProjectImageCarouselComponent;
  let fixture: ComponentFixture<CommonProjectImageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonProjectImageCarouselComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProjectImageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
