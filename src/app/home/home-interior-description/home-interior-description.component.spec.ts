import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInteriorDescriptionComponent } from './home-interior-description.component';

describe('HomeInteriorDescriptionComponent', () => {
  let component: HomeInteriorDescriptionComponent;
  let fixture: ComponentFixture<HomeInteriorDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInteriorDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInteriorDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
