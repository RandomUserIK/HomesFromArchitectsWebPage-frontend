import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRowComponent } from './form-row.component';

describe('FormRowComponent', () => {
  let component: FormRowComponent;
  let fixture: ComponentFixture<FormRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
