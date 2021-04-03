import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownFilterComponent } from './drop-down-filter.component';

describe('DropDownFilterComponent', () => {
  let component: DropDownFilterComponent;
  let fixture: ComponentFixture<DropDownFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
