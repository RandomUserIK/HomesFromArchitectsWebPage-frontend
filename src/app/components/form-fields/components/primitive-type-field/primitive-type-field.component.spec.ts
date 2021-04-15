import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimitiveTypeFieldComponent } from './primitive-type-field.component';

describe('TextFieldComponent', () => {
  let component: PrimitiveTypeFieldComponent;
  let fixture: ComponentFixture<PrimitiveTypeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimitiveTypeFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimitiveTypeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
