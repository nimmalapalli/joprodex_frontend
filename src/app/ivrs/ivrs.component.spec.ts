import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVRSComponent } from './ivrs.component';

describe('IVRSComponent', () => {
  let component: IVRSComponent;
  let fixture: ComponentFixture<IVRSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IVRSComponent]
    });
    fixture = TestBed.createComponent(IVRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
