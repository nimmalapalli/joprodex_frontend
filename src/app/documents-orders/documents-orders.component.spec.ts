import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsOrdersComponent } from './documents-orders.component';

describe('DocumentsOrdersComponent', () => {
  let component: DocumentsOrdersComponent;
  let fixture: ComponentFixture<DocumentsOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsOrdersComponent]
    });
    fixture = TestBed.createComponent(DocumentsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
