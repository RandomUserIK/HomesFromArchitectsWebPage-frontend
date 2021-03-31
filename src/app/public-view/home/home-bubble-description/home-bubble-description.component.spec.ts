import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBubbleDescriptionComponent } from './home-bubble-description.component';

describe('HomeBubbleDescriptionComponent', () => {
  let component: HomeBubbleDescriptionComponent;
  let fixture: ComponentFixture<HomeBubbleDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBubbleDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBubbleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
