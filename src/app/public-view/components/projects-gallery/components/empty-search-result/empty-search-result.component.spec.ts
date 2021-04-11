import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySearchResultComponent } from './empty-search-result.component';

describe('EmptySearchResultComponent', () => {
  let component: EmptySearchResultComponent;
  let fixture: ComponentFixture<EmptySearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptySearchResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptySearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
