import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IndividualProjectInfoComponent} from './individual-project-info.component';

describe('IndividualProjectInfoComponent', () => {
  let component: IndividualProjectInfoComponent;
  let fixture: ComponentFixture<IndividualProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualProjectInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
