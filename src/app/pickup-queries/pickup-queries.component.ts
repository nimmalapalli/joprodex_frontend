import { Component,AfterViewInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-pickup-queries',
  templateUrl: './pickup-queries.component.html',
  styleUrls: ['./pickup-queries.component.css']
})
export class PickupQueriesComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'ID', 'COURIER', 'NUMBER OF ORDERS','STATUS','WAREHOUSE','PICKUP REF. NO','DOWNLOAD'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
  status:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',status:''},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He',status:''},
];
