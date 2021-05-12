import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonProjectInteriorComponent} from './common-project-interior.component';

describe('CommonProjectInteriorComponent', () => {
  let component: CommonProjectInteriorComponent;
  let fixture: ComponentFixture<CommonProjectInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonProjectInteriorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProjectInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
