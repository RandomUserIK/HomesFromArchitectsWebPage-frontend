import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorFieldComponent } from './text-editor-field.component';

describe('TextEditorFieldComponent', () => {
  let component: TextEditorFieldComponent;
  let fixture: ComponentFixture<TextEditorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextEditorFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextEditorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
