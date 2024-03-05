import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGstComponent } from './product-gst.component';

describe('ProductGstComponent', () => {
  let component: ProductGstComponent;
  let fixture: ComponentFixture<ProductGstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductGstComponent]
    });
    fixture = TestBed.createComponent(ProductGstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
