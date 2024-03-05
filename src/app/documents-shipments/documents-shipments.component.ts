import { Component } from '@angular/core';

@Component({
  selector: 'app-documents-shipments',
  templateUrl: './documents-shipments.component.html',
  styleUrls: ['./documents-shipments.component.css']
})
export class DocumentsShipmentsComponent {
 
  shipments:any=[
    { channel: 'Custom', orderID: 1699678797	, date: '2023/11/11',product:'BOOK',payment:500,pMethod:'PREPAID',customer:'RAVEEN',carrier:'Bluedart Surface',AWB:76888978806,status:'Delivered'},
    { channel: 'Custom', orderID: 1699884092, date: '2023/11/13',product:'HOUSEHOLD	',payment:10000,pMethod:'PREPAID',customer:'SUSHMA',carrier:'Delhivery Surface 5 K.G',AWB:4270712113521,status:'In Transit'},
    { channel: 'Custom', orderID: 1699938742, date: '2023/11/14',product:'MARBLE STATUE',payment:2000,pMethod:'PREPAID',customer:'PANKAJ KUMA...',carrier:'Delhivery Surface 5 K.G',AWB:4270712113871,status:'Cancelled'},
  ];
 
  fliterShipments:any=[];
  showFilters: boolean = false; 
  selectedStatus: string = ''; // Property to hold the selected status

  constructor () {
    this.fliterShipments=[...this.shipments]
  }
  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }
  
  filterStatus(status:string) {

    this.selectedStatus = status;
    if (status === 'All') {
      this.fliterShipments = this.shipments; // Show all shipments
    } else {
      this.fliterShipments = this.shipments.filter((shipment: { status: string; }) => shipment.status === status);
    }
  }
  getStatusButtonClass(status: string): string {
    return status === 'Cancelled' ? 'btn btn-outline-danger btn-sm ' : 'btn btn-outline-info btn-sm';
  }


}
