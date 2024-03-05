import { Component } from '@angular/core';

@Component({
  selector: 'app-documents-orders',
  templateUrl: './documents-orders.component.html',
  styleUrls: ['./documents-orders.component.css']
})
export class DocumentsOrdersComponent {
   
  items: any = [
    // Add your item data here
    {
      channel: '1699938742',
      order: '2023/11/14',
      date: 'MARBLE STATUE ()',
      product: '2000',
      payment: 'PREPAID',
      method: 'PANKAJ KUMA...',
      customer: '9437184111',
      phone: '2.5 Kg',
      weight: '',
      ivrStatus: '',
      whatsappStatus: '',
      shopifyTags: '+',
      tags: ''
    },
    // Add more items as needed
  ];

  filteredOrderDetails: any = [];

  constructor() {
    this.filteredOrderDetails = this.items;
  }

  showOrdersByStatus(status: string): void {
    if (status === 'All') {
      this.filteredOrderDetails = this.items;
    } else {
      this.filteredOrderDetails = this.items.filter((order: { status: string; }) => order.status === status);
    }
  }

  countOrdersByStatus(status: string): number {
    return this.items.filter((order: { status: string; }) => order.status === status).length;
  }

  bookOrder(): void {
    // Logic to handle booking order
    // This method will be invoked when the "Booked" button is clicked
    console.log('Order Booked!');
  }
}
