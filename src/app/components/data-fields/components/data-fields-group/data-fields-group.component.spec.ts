import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFieldsGroupComponent } from './data-fields-group.component';

describe('DataFieldsGroupComponent', () => {
  let component: DataFieldsGroupComponent;
  let fixture: ComponentFixture<DataFieldsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFieldsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFieldsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
