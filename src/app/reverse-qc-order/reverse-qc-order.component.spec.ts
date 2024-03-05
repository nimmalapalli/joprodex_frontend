import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseQcOrderComponent } from './reverse-qc-order.component';

describe('ReverseQcOrderComponent', () => {
  let component: ReverseQcOrderComponent;
  let fixture: ComponentFixture<ReverseQcOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReverseQcOrderComponent]
    });
    fixture = TestBed.createComponent(ReverseQcOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
