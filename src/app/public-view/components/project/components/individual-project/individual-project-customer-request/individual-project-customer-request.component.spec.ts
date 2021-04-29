import {ComponentFixture, TestBed} from '@angular/core/testing';

import {IndividualProjectCustomerRequestComponent} from './individual-project-customer-request.component';

describe('IndividualProjectCustomerRequestComponent', () => {
  let component: IndividualProjectCustomerRequestComponent;
  let fixture: ComponentFixture<IndividualProjectCustomerRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividualProjectCustomerRequestComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualProjectCustomerRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
