import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IndividualInteriorProjectTitleTextComponent} from './individual-interior-project-title-text.component';

describe('IndividualInteriorProjectTitleTextComponent', () => {
  let component: IndividualInteriorProjectTitleTextComponent;
  let fixture: ComponentFixture<IndividualInteriorProjectTitleTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualInteriorProjectTitleTextComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualInteriorProjectTitleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
