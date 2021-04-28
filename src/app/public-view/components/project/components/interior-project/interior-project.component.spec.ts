import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InteriorProjectComponent} from './interior-project.component';

describe('InteriorProjectComponent', () => {
  let component: InteriorProjectComponent;
  let fixture: ComponentFixture<InteriorProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InteriorProjectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
