import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticComponent } from './domestic.component';

describe('DomesticComponent', () => {
  let component: DomesticComponent;
  let fixture: ComponentFixture<DomesticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DomesticComponent]
    });
    fixture = TestBed.createComponent(DomesticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
