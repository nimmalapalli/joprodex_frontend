import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent {
  accordionItems = [
    { title: 'Custom Order - ₹ 1', image: 'https://ship.nimbuspost.com/assets/img/order-confirmation.png' },
    { title: 'Channels Order - ₹ 1',  image: 'https://ship.nimbuspost.com/assets/img/order-confirmation.png' },
    { title: 'Shipment - ₹ 2',  image: 'https://ship.nimbuspost.com/assets/img/shipment.png' }
    // Add more items as needed
  ];

  selected: number | null = null;

  toggleItem(index: number) {
    this.selected = this.selected === index ? null : index;
  }
}
