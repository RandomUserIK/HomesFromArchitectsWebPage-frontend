import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommonProjectComponent } from './create-common-project.component';

describe('CreateProjectComponent', () => {
  let component: CreateCommonProjectComponent;
  let fixture: ComponentFixture<CreateCommonProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCommonProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommonProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
