import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprTextSectionComponent } from './gdpr-text-section.component';

describe('GdprTextSectionComponent', () => {
  let component: GdprTextSectionComponent;
  let fixture: ComponentFixture<GdprTextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdprTextSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdprTextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
