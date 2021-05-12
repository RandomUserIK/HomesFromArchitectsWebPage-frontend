import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommonProjectChangesComponent} from './common-project-changes.component';

describe('CommonProjectChangesComponent', () => {
  let component: CommonProjectChangesComponent;
  let fixture: ComponentFixture<CommonProjectChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonProjectChangesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonProjectChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
