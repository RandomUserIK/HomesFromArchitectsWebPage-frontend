import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminGalleryLoadingComponent} from './admin-gallery-loading.component';

describe('AdminGalleryLoadingComponent', () => {
  let component: AdminGalleryLoadingComponent;
  let fixture: ComponentFixture<AdminGalleryLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminGalleryLoadingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGalleryLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
