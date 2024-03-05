import { Component, OnInit } from '@angular/core';

interface Product {
  products: string;
  total: number;
  booked: string;
  pendingPickUp: string;
  inTransit: string;
  delivered: string;
  rto: string;
}

@Component({
  selector: 'app-product-wise',
  templateUrl: './product-wise.component.html',
  styleUrls: ['./product-wise.component.css']
})
export class ProductWiseComponent implements OnInit {
  products: Product[] = [
    { products: 'DOX', total: 6, booked: '0 (0%)', pendingPickUp: '1 (16.67%)', inTransit: '0 (0%)', delivered: '5 (83.33%)', rto: '0 (0%)' },
    { products: 'BOOK', total: 1, booked: '0 (0%)', pendingPickUp: '0 (0%)', inTransit: '0 (0%)', delivered: '1 (100%)', rto: '0 (0%)' },
    // Add more products as needed
  ];

  filteredProducts: Product[] = [];
  productName: string = '';

  ngOnInit() {
    // Assign initial products to filteredProducts when the component initializes
    this.filteredProducts = [...this.products];
  }

  applyFilter() {
    if (this.productName.trim() !== '') {
      this.filteredProducts = this.products.filter(p =>
        p.products.toLowerCase().includes(this.productName.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  clearFilter() {
    this.productName = '';
    this.filteredProducts = [...this.products];
  }
}
