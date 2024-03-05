import { Component } from '@angular/core';

@Component({
  selector: 'app-zone-wise',
  templateUrl: './zone-wise.component.html',
  styleUrls: ['./zone-wise.component.css']
})
export class ZoneWiseComponent {
  displayedColumns: string[] = ['demo-State', 'demo-count', 'demo-weight', 'demo-symbol','demo-transit','demo-DELIVERED','dem-RTO'];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  count: number;
  State: string;
  booked: String;
  pickup: string;
  transit:String;
  delivered:string;
  rto:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {State: 'Z1', count: 6, booked: '0(0%)', pickup: '0(0%)', transit:'0(0%)',delivered:'1(100%)',rto:'0(0%)'},
  {State: 'Z2', count: 3, booked: '0(0%)', pickup: '0(0%)',transit:'1(6.25%)',delivered:'15(93.75%)',rto:'0(0%)'},
];