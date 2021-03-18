import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstagramPostComponent } from './home-instagram-post.component';

describe('HomeInstagramPostComponent', () => {
  let component: HomeInstagramPostComponent;
  let fixture: ComponentFixture<HomeInstagramPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInstagramPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInstagramPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
