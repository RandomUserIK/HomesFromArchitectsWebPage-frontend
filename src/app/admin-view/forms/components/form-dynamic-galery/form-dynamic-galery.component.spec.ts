import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDynamicGaleryComponent } from './form-dynamic-galery.component';

describe('FormDynamicGaleryComponent', () => {
  let component: FormDynamicGaleryComponent;
  let fixture: ComponentFixture<FormDynamicGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDynamicGaleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDynamicGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
