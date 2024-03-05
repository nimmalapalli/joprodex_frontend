import { Component } from '@angular/core';

@Component({
  selector: 'app-b2c-orders',
  templateUrl: './b2c-orders.component.html',
  styleUrls: ['./b2c-orders.component.css']
})
export class B2cOrdersComponent {
  showDropdown: boolean = false;

  orderDetails: any[] = [
    {
      order: '1701127997',
      date: '2023/11/28',
      product: 'DOX ()',
      payment: '500',
      customer: 'Savitribai ...',
      phone: '2071533633',
      weight: '0.1 Kg',
      ivrStatus: 'Some IVR status',
      shopifyTag: 'Some Shopify tag',
      tags: 'Some tags',
      status: 'Booked'
    },
    {
      order: '1701127998',
      date: '2023/11/29',
      product: 'Another Product',
      payment: '600',
      customer: 'Another Customer',
      phone: '1234567890',
      weight: '0.2 Kg',
      ivrStatus: 'IVR status 2',
      shopifyTag: 'Shopify tag 2',
      tags: 'Tags 2',
      status: 'Cancelled'
      // Add values for other properties
    },
 
    // Add more objects as needed
  ];
  filteredOrderDetails: any = [];

  constructor() {
    this.filteredOrderDetails = this.orderDetails;
  }

  showOrdersByStatus(status: string): void {
    if (status === 'All') {
      this.filteredOrderDetails = this.orderDetails;
    } else {
      this.filteredOrderDetails = this.orderDetails.filter(order => order.status === status);
    }
  }

  countOrdersByStatus(status: string): number {
    return this.orderDetails.filter(order => order.status === status).length;
  }
  
  toggleCreateOrder(): void {
    this.showDropdown = !this.showDropdown;
  }

  
 
 
}
