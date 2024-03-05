import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicepincodesComponent } from './servicepincodes.component';

describe('ServicepincodesComponent', () => {
  let component: ServicepincodesComponent;
  let fixture: ComponentFixture<ServicepincodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicepincodesComponent]
    });
    fixture = TestBed.createComponent(ServicepincodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
