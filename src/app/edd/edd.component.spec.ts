import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDDComponent } from './edd.component';

describe('EDDComponent', () => {
  let component: EDDComponent;
  let fixture: ComponentFixture<EDDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EDDComponent]
    });
    fixture = TestBed.createComponent(EDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
