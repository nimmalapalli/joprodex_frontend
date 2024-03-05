import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentQueriesComponent } from './shipment-queries.component';

describe('ShipmentQueriesComponent', () => {
  let component: ShipmentQueriesComponent;
  let fixture: ComponentFixture<ShipmentQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipmentQueriesComponent]
    });
    fixture = TestBed.createComponent(ShipmentQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
