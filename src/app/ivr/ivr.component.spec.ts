import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IVRComponent } from './ivr.component';

describe('IVRComponent', () => {
  let component: IVRComponent;
  let fixture: ComponentFixture<IVRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IVRComponent]
    });
    fixture = TestBed.createComponent(IVRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
