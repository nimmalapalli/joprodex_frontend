import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelWiseComponent } from './channel-wise.component';

describe('ChannelWiseComponent', () => {
  let component: ChannelWiseComponent;
  let fixture: ComponentFixture<ChannelWiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelWiseComponent]
    });
    fixture = TestBed.createComponent(ChannelWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
