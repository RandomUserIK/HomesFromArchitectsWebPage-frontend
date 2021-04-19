import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFieldResolverComponent } from './data-field-resolver.component';

describe('DataFieldResolverComponent', () => {
  let component: DataFieldResolverComponent;
  let fixture: ComponentFixture<DataFieldResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFieldResolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataFieldResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
