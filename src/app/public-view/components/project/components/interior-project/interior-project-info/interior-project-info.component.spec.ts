import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InteriorProjectInfoComponent} from './interior-project-info.component';

describe('InteriorProjectInfoComponent', () => {
  let component: InteriorProjectInfoComponent;
  let fixture: ComponentFixture<InteriorProjectInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteriorProjectInfoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorProjectInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
