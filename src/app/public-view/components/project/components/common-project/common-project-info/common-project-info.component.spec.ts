import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonProjectInfoComponent} from './common-project-info.component';

describe('CommonProjectInfoComponent', () => {
  let component: CommonProjectInfoComponent;
  let fixture: ComponentFixture<CommonProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonProjectInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
