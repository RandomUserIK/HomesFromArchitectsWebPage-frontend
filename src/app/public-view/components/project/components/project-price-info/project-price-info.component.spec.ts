import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectPriceInfoComponent} from './project-price-info.component';

describe('ProjectPriceInfoComponent', () => {
  let component: ProjectPriceInfoComponent;
  let fixture: ComponentFixture<ProjectPriceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectPriceInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPriceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
