import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWiseComponent } from './product-wise.component';

describe('ProductWiseComponent', () => {
  let component: ProductWiseComponent;
  let fixture: ComponentFixture<ProductWiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductWiseComponent]
    });
    fixture = TestBed.createComponent(ProductWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
