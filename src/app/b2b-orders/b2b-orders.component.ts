import { Component } from '@angular/core';

@Component({
  selector: 'app-b2b-orders',
  templateUrl: './b2b-orders.component.html',
  styleUrls: ['./b2b-orders.component.css']
})
export class B2bOrdersComponent {
  
  customers: any = [
    // Replace this with your actual data
    {
      // channel: 'Online',
      // order: 'ORD001',
      // date: '2023-12-20',
      // product: 'Product A',
      // payment: 'Credit Card',
      // method: 'Online',
      // customer: 'John Doe',
      // phone: '123-456-7890',
      // weight: 1.5,
      // ivrStatus: 'Completed',
      // tags: 'Tag1',
      // status: 'Delivered'
    },
    // Add more customer data as needed
  ];
  filteredCustomers: any = [];

  constructor() {
    this.filteredCustomers = this.customers;
  }

  showOrdersByStatus(status: string): void {
    if (status === 'All') {
      this.filteredCustomers = this.customers;
    } else {
      this.filteredCustomers = this.customers.filter((customer: { status: string; }) => customer.status === status);
    }
  }

  countOrdersByStatus(status: string): number {
    return this.customers.filter((customer: { status: string; }) => customer.status === status).length;
  }

  noRecordsFound: boolean = false;

  // Method to check if there are no records
  checkNoRecords(): void {
    this.noRecordsFound = this.customers.length === 0;
  }
}
