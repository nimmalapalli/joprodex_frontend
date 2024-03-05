import { Component,AfterViewInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-weight-reconciliation',
  templateUrl: './weight-reconciliation.component.html',
  styleUrls: ['./weight-reconciliation.component.css']
})
export class WeightReconciliationComponent implements AfterViewInit {
   
  displayedColumns: string[] = ['position', 'DATE', 'AWB NUMBER', 'ORDER ID','ENTERED WEIGHT','APPLIED WEIGHT','WEIGHT CHARGES','PRODUCT','STATUS'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface PeriodicElement {
  id: number;
  date: string;
  Number: number;
  symbol: string;
  status:string
  product:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '2023-11-21', id: 1699176482, Number: 76883380313	, symbol: 'H',status:'',product:'GIFT ()'},
  {date: '2023-11-21', id: 1699678797, Number: 76888978806	, symbol: 'He',status:'',product:'BOOK ()'},
];