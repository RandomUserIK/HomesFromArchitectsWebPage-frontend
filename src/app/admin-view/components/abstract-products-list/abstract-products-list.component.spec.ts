import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractProductsListComponent } from './abstract-products-list.component';

describe('AbstractProductsListComponent', () => {
  let component: AbstractProductsListComponent;
  let fixture: ComponentFixture<AbstractProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractProductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
