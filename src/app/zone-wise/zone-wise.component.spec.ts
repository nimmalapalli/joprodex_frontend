import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneWiseComponent } from './zone-wise.component';

describe('ZoneWiseComponent', () => {
  let component: ZoneWiseComponent;
  let fixture: ComponentFixture<ZoneWiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoneWiseComponent]
    });
    fixture = TestBed.createComponent(ZoneWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
