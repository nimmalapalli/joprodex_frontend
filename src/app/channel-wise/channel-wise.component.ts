import { Component } from '@angular/core';

@Component({
  selector: 'app-channel-wise',
  templateUrl: './channel-wise.component.html',
  styleUrls: ['./channel-wise.component.css']
})
export class ChannelWiseComponent {
  displayedColumns: string[] = ['demo-Channel','demo-total', 'demo-count', 'demo-weight', 'demo-symbol','demo-transit','demo-DELIVERED','dem-RTO'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  count: number;
  channel: string;
  booked: String;
  pickup: string;
  transit:String;
  delivered:string;
  rto:string;
  total:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {channel: 'custom', count: 20, booked: '0(0%)', pickup: '0(0%)', transit:'0(0%)',delivered:'1(100%)',rto:'0(0%)',total:23},

];

