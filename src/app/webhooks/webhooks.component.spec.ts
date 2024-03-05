import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebhooksComponent } from './webhooks.component';

describe('WebhooksComponent', () => {
  let component: WebhooksComponent;
  let fixture: ComponentFixture<WebhooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebhooksComponent]
    });
    fixture = TestBed.createComponent(WebhooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
