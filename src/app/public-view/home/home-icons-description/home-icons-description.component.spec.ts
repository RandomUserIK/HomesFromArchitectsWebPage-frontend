import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeIconsDescriptionComponent } from './home-icons-description.component';

describe('IconsDescriptionComponent', () => {
  let component: HomeIconsDescriptionComponent;
  let fixture: ComponentFixture<HomeIconsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeIconsDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeIconsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
