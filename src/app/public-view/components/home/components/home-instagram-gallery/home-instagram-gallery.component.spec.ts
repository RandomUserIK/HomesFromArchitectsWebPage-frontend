import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInstagramGalleryComponent } from './home-instagram-gallery.component';

describe('HomeInstagramGalleryComponent', () => {
  let component: HomeInstagramGalleryComponent;
  let fixture: ComponentFixture<HomeInstagramGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInstagramGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInstagramGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
