import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingScriptComponent } from './tracking-script.component';

describe('TrackingScriptComponent', () => {
  let component: TrackingScriptComponent;
  let fixture: ComponentFixture<TrackingScriptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackingScriptComponent]
    });
    fixture = TestBed.createComponent(TrackingScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
