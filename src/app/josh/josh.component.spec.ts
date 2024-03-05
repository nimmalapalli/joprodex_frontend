import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoshComponent } from './josh.component';

describe('JoshComponent', () => {
  let component: JoshComponent;
  let fixture: ComponentFixture<JoshComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JoshComponent]
    });
    fixture = TestBed.createComponent(JoshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
