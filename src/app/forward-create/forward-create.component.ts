import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forward-create',
  templateUrl: './forward-create.component.html',
  styleUrls: ['./forward-create.component.css']
})
export class ForwardCreateComponent {
  orderId:any;
  orderForm!:FormGroup
  constructor(private of:FormBuilder){

    this.orderForm=this.of.group({
      orderId:  '',
      orderType:'',
    fname: '',
    lname: '',
    companyName:'',
    Address:'',
    pincode:'',
    city:'',
    state:'',
    date:'',
    payment:'',
    product:'',
    customer:'',
    phone:'',
    weight:'',
    })


    this.orderForm.controls['orderId'].setValue(Math.floor(100000 + Math.random() * 900000))
    console.log(this.orderId)
  }
SubmitOrderForm(){
  const data =this.orderForm.value;
  console.log(data)
}

}
