import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsShipmentsComponent } from './documents-shipments.component';

describe('DocumentsShipmentsComponent', () => {
  let component: DocumentsShipmentsComponent;
  let fixture: ComponentFixture<DocumentsShipmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentsShipmentsComponent]
    });
    fixture = TestBed.createComponent(DocumentsShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
