import { ComponentFixture, TestBed } from '@angular/core/testing';

import { B2cComponent } from './b2c.component';

describe('B2cComponent', () => {
  let component: B2cComponent;
  let fixture: ComponentFixture<B2cComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [B2cComponent]
    });
    fixture = TestBed.createComponent(B2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
