import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourierWiseComponent } from './courier-wise.component';

describe('CourierWiseComponent', () => {
  let component: CourierWiseComponent;
  let fixture: ComponentFixture<CourierWiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourierWiseComponent]
    });
    fixture = TestBed.createComponent(CourierWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
