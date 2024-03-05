import { Component } from '@angular/core';

@Component({
  selector: 'app-exception',
  templateUrl: './exception.component.html',
  styleUrls: ['./exception.component.css']
})
export class ExceptionComponent {

  constructor() {
    this.filteredOrderList=[...this.orders]
  }
       
  orders = [
    {
      channel: 'custom',
      ndrDate: '2023-11-13',
      order: '1699678797',
      product: 'book',
      payment: '1000(prepared)',
      customer: 'RAVEENA KAKU... 9017290688',
      carrier: 'BLUEDART SURFASE 76888978806',
      status: 'DELIVERED',
      tags: '',
      exceptionInfo: '1 attempt(s) show history',
      action: 'RE ATTEMPT'
    },
    {
      channel: 'custom',
      ndrDate: '2023-11-06',
      order: '1698911355',
      product: 'dox',
      payment: '500(prepared)',
      customer: 'SRIJAN RAYC... 9920083669',
      carrier: 'BLUEDART EXPRESS 76880680634',
      status: 'DELIVERED',
      tags: '',
      exceptionInfo: '1 Attempt(s) CNEE REFUSED ID/OTP NOT SHARED-INCORRECT show History',
      action: '-'
    },
    {
      channel: 'custom',
      ndrDate: '2023-11-01',
      order: '1698477138',
      product: 'LAPTOP AND...',
      payment: '5000(Prepared)',
      customer: 'SHEEL OLDME... 8626904555',
      carrier: 'BLUEDART EXPRESS',
      status: '',
      tags: '',
      exceptionInfo: '1 Attempt(s) ADDRESS UNLOCATABLE; CANNOT DELIVERED show History',
      action: '-'
    },
    // Add three more orders similarly
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
    this.filteredOrderList = this.orders.filter(order => order.action === actionName);
  }
}
