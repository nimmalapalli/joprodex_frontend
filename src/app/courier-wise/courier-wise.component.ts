import { Component } from '@angular/core';

@Component({
  selector: 'app-courier-wise',
  templateUrl: './courier-wise.component.html',
  styleUrls: ['./courier-wise.component.css']
})
export class CourierWiseComponent {
  displayedColumns: string[] = ['demo-Channel','demo-total', 'demo-weight', 'demo-symbol','demo-transit','demo-DELIVERED','dem-RTO'];
  dataSource = ELEMENT_DATA;
  Courier: string[] = [
    'Amzon Shipping',
    'Amzon Shipping 1kg',
    'Amzon Shipping 2kg',
    'Amzon Shipping 5kg',
    'Amzon Shipping 10kg',
    'Amzon Shipping 20kg',
    'Blue Dart',
    'Bluedart IND',
    'Bluedart IND RAS',
    'Bluedart Express',
    'Bluedart Express RAS',
    'Bluedart Surface',
    'Delhivery 10KG Reverse',
    'Delhivery 20KG Reverse',
    'Delhivery 5KG Reverse',
    'Delhivery Air',
    'Delhivery Air Reverse',
    'Delhivery Surface','Delhivery Surface 5 K.G','Delhivery Surface 10 K.G','Delhivery Surface 20 K.G','Delhivery Surface Reverse',
    'DTDC Air','DTDC Premium','DTDC Surface',
    'DTDC Surface 1 K.G','DTDC Surface 2 K.G','DTDC Surface 3 K.G','DTDC Surface 10 K.G','DTDC Surface 20 K.G',
    'Ecom EXP','Ecom RAS','Ecom Reverse','Ecom Reverse Qc',
    'Ekart','Ekart 1 K.G','Ekart 2 K.G','Ekart 3 K.G','Ekart 5 K.G','Ekart 10 K.G',
    'Shadowfax','Shadow 1 K.G','Shadowfax Reverse Qc',
    'Shadowfax-Surface 1 K.G', 'Shadowfax-Surface 2 K.G', 'Shadowfax-Surface 3 K.G', 'Shadowfax-Surface 4 K.G', 'Shadowfax-Surface 5 K.G',
    'Shree-Maruti 250 Gm',
    'Xpressbees 1 K.G','Xpressbees 10 K.G','Xpressbees 2 K.G','Xpressbees 5 K.G',
    'Xpressbees Express','Xpressbees Reverse','Xpressbees Reverse Qc','Xpressbees Surface',

  ];
}
export interface PeriodicElement {
  channel: string;
  booked: String;
  pickup: string;
  transit:String;
  delivered:string;
  rto:string;
  total:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {channel: 'Bluedart',  booked: '0(0%)', pickup: '0(0%)', transit:'0(0%)',delivered:'1(100%)',rto:'0(0%)',total:16},
  {channel: 'Delhivey', booked: '0(0%)', pickup: '0(0%)', transit:'0(0%)',delivered:'1(100%)',rto:'0(0%)',total:4},
];
