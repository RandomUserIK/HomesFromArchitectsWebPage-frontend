import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedContentComponent } from './extended-content.component';

describe('ExtendedContentComponent', () => {
  let component: ExtendedContentComponent;
  let fixture: ComponentFixture<ExtendedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
