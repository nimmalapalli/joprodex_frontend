import { Component } from '@angular/core';

@Component({
  selector: 'app-weightreco',
  templateUrl: './weightreco.component.html',
  styleUrls: ['./weightreco.component.css']
})
export class WeightrecoComponent {
  constructor () {
    this.filteredOrderList=this.orders
  }
  orders: any = [
    {
      weightAppliedDate: '2023-11-14',
      awbNumber: 'bluedart Express 76878769925',
      orderId: '169873031',
      enteredWeight: 'Dead Weight 200g LxBxH:1*1*1 Charged Slab 500g Volumetric Weight 0g',
      appliedWeight: 'Applied Slab:1000g',
      weightCharges: 'Forward:Rs.80 Charged to wallet:No',
      product: 'DOX()',
      status: 'Dispute Closed'
    },
    {
      weightAppliedDate: '2023-11-14',
      awbNumber: 'Bluedart Express',
      orderId: '1698741049',
      enteredWeight: 'Dead Weight 0.062g LxBxH:1*1*1 Charged Slab 500g Volumetric Weight 0g',
      appliedWeight: 'Applied Slab:1000g',
      weightCharges: 'Forward:Rs.80 Charged to walet:No',
      product: 'POOJA COIN(COOPER)()',
      status: 'Dispute Open'
    },
    {
      weightAppliedDate: '2023-11-07',
      awbNumber: 'Bluedartair IND RAS 81424044122',
      orderId: '1698294443',
      enteredWeight: 'Dead Weight 200g LxBxH:1*1*1 Charged Slab 500g Volumetric Weight 0g',
      appliedWeight: 'Applied Slab:1000g',
      weightCharges: 'forward:RS.81 Charged to wallet:Yes',
      product: 'DOX()',
      status: 'Dispute Closed'
    },
    // Add more orders here...
  ];
  filteredOrderList:any=[];
  showByStatus(status:string): void {
      if(status == 'All'){
        this.filteredOrderList=[...this.orders]
      }
      else{
        this.filteredOrderList=this.orders.filter((order: { status: string; }) => order.status === status);
      }
  }
  showByAction(actionName: string): void {
    this.filteredOrderList = this.orders.filter((order: { action: string; }) => order.action === actionName);
  }
}
