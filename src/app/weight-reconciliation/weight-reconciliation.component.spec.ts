import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightReconciliationComponent } from './weight-reconciliation.component';

describe('WeightReconciliationComponent', () => {
  let component: WeightReconciliationComponent;
  let fixture: ComponentFixture<WeightReconciliationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightReconciliationComponent]
    });
    fixture = TestBed.createComponent(WeightReconciliationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
