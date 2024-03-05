import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwebhookComponent } from './newwebhook.component';

describe('NewwebhookComponent', () => {
  let component: NewwebhookComponent;
  let fixture: ComponentFixture<NewwebhookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewwebhookComponent]
    });
    fixture = TestBed.createComponent(NewwebhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
