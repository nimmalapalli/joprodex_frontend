import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakingpageComponent } from './trakingpage.component';

describe('TrakingpageComponent', () => {
  let component: TrakingpageComponent;
  let fixture: ComponentFixture<TrakingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrakingpageComponent]
    });
    fixture = TestBed.createComponent(TrakingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
