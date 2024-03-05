import { Component } from '@angular/core';

@Component({
  selector: 'app-product-gst',
  templateUrl: './product-gst.component.html',
  styleUrls: ['./product-gst.component.scss']
})
export class ProductGstComponent {
    

  tableData = [
    { id: 76022, name: 'JDOX', sku: '', gst: '', city: 'New York', country: 'USA', occupation: 'Engineer' },
    { id: 2887254, name: 'chocolate', gst: '', age: 28, city: 'London', country: 'UK', occupation: 'Designer' },
    // Add more objects with data as needed
  ];
}
