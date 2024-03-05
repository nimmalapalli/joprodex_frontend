import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterShipComponent } from './after-ship.component';

describe('AfterShipComponent', () => {
  let component: AfterShipComponent;
  let fixture: ComponentFixture<AfterShipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterShipComponent]
    });
    fixture = TestBed.createComponent(AfterShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
