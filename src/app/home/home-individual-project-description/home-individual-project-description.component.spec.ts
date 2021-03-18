import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIndividualProjectDescriptionComponent } from './home-individual-project-description.component';

describe('HomeIndividualProjectDescriptionComponent', () => {
  let component: HomeIndividualProjectDescriptionComponent;
  let fixture: ComponentFixture<HomeIndividualProjectDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIndividualProjectDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIndividualProjectDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
