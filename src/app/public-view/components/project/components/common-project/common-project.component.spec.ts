import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonProjectComponent} from './common-project.component';

describe('CommonProjectComponent', () => {
  let component: CommonProjectComponent;
  let fixture: ComponentFixture<CommonProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonProjectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
