import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsDescriptionComponent } from './icons-description.component';

describe('IconsDescriptionComponent', () => {
  let component: IconsDescriptionComponent;
  let fixture: ComponentFixture<IconsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
