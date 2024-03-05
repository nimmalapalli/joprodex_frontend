import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupQueriesComponent } from './pickup-queries.component';

describe('PickupQueriesComponent', () => {
  let component: PickupQueriesComponent;
  let fixture: ComponentFixture<PickupQueriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickupQueriesComponent]
    });
    fixture = TestBed.createComponent(PickupQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
