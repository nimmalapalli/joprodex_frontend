import { Component } from '@angular/core';

@Component({
  selector: 'app-reasons',
  templateUrl: './reasons.component.html',
  styleUrls: ['./reasons.component.css']
})
export class ReasonsComponent {
  displayedColumns: string[] = ['demo-Channel','demo-total', 'demo-count', ];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  count: number;
  channel: string;
  total:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {channel: 'No Records Found', count: NaN,total:NaN},

];
