import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbandComponent } from './aband.component';

describe('AbandComponent', () => {
  let component: AbandComponent;
  let fixture: ComponentFixture<AbandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbandComponent]
    });
    fixture = TestBed.createComponent(AbandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
