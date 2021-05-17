import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedContentHeaderComponent } from './extended-content-header.component';

describe('ExtendedContentInfoComponent', () => {
  let component: ExtendedContentHeaderComponent;
  let fixture: ComponentFixture<ExtendedContentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedContentHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedContentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
