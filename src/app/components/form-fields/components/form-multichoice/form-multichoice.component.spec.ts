import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMultichoiceComponent } from './form-multichoice.component';

describe('FormMultichoiceComponent', () => {
  let component: FormMultichoiceComponent;
  let fixture: ComponentFixture<FormMultichoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMultichoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMultichoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
