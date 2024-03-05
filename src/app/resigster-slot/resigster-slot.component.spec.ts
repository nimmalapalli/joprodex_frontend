import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResigsterSlotComponent } from './resigster-slot.component';

describe('ResigsterSlotComponent', () => {
  let component: ResigsterSlotComponent;
  let fixture: ComponentFixture<ResigsterSlotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResigsterSlotComponent]
    });
    fixture = TestBed.createComponent(ResigsterSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
