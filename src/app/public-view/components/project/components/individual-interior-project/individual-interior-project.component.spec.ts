import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IndividualInteriorProjectComponent} from './individual-interior-project.component';

describe('IndividualInteriorProjectComponent', () => {
  let component: IndividualInteriorProjectComponent;
  let fixture: ComponentFixture<IndividualInteriorProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualInteriorProjectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualInteriorProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
