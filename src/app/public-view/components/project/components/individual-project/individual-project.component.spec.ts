import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IndividualProjectComponent} from './individual-project.component';

describe('IndividualProjectComponent', () => {
  let component: IndividualProjectComponent;
  let fixture: ComponentFixture<IndividualProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualProjectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
