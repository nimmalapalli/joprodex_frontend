// import { Component,Inject } from '@angular/core';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { DialogData } from '../nav/nav.component';

// import { AuthService } from '../auth.service';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Observable, map, shareReplay } from 'rxjs';
// import { NavbarService } from '../navbar.service';
// import { Navbar2Service } from '../navbar2.service';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup } from '@angular/forms';


// @Component({
//   selector: 'app-rechargedialog',
//   templateUrl: './rechargedialog.component.html',
//   styleUrls: ['./rechargedialog.component.scss']
// })
// export class RechargedialogComponent {
//   json:string="null";
//   data:any;
//     headers: any;
  

// recharge!:FormGroup
//   constructor(private form:FormBuilder,public auth:AuthService,public nav: NavbarService,public nav1: Navbar2Service,private http:HttpClient,private router:ActivatedRoute){
// this.recharge=this.form.group({
//   name:'',
//   email:'',
//   amount:'',
//   description:'',
//   productname:''
  
// })
  
//   }
  
  
//   ngOnInit(){
//     this.getProfile();
//     this.nav.hide();
//     this.nav1.show();
   
//   }
  
//   getProfile(){
//   this.auth.getprofile().subscribe((res)=>{
//     this.data=res['data'];
//      console.log(res)
  
//   })
//   } 
//   submit(){
  
//   //   if (this.recharge.valid) {
//   //      this.auth.recharge(this.recharge.value)
//   //       .subscribe(
//   //         (response) => {
//   //           // Handle successful response
//   //           console.log('Recharge successful:', response);
//   //         },
//   //         (error) => {
//   //           // Handle error
//   //           console.error('Error occurred during recharge:', error);
//   //         }
//   //       );
//   //   } else {
//   //     console.log("Form is invalid");
//   //   }
//   // }
  
//   if (this.recharge.valid) {
//     this.auth.recharge(this.recharge.value)
//       .subscribe(
//         (response) => {
//           // Handle successful recharge
//           console.log('Recharge successful:', response);
//         },
//         (error) => {
//           // Handle error during recharge
//           console.error('Error occurred during recharge:', error);
//         }
//       );
//   } else {
//     console.log("Recharge form is invalid");
//   }
  
//   if (this.recharge) {
//    (this.auth.recharge(this.recharge.value))
//       .subscribe(
//         (response) => {
//           // Handle successful verification
//           console.log('Order verification successful:', response);
//         },
//         (error) => {
//           // Handle error during verification
//           console.error('Error occurred during order verification:', error);
//         }
//       );
//   } else {
//     console.log("Order form is invalid");
//   }
  
     
// }

// }



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { HttpHeaders } from '@angular/common/http';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../nav/nav.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { NavbarService } from '../navbar.service';
import { Navbar2Service } from '../navbar2.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rechargedialog',
  templateUrl: './rechargedialog.component.html',
  styleUrls: ['./rechargedialog.component.scss']
})
export class RechargedialogComponent {
  data: any;
  rechargeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService
  ) {
    this.rechargeForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      amount: ['', Validators.required],
      productname: ['', Validators.required],
      description: ['', Validators.required],
      orderId: ['', Validators.required],
      paymentId: ['', Validators.required],
      razorpaySignature: ['', Validators.required]
      

    });
    
  }
 
  submit() {
    if (this.rechargeForm.valid) {
      this.auth.recharge(this.rechargeForm.value).subscribe(
        (response) => {
          console.log('Recharge successful:', response);
        },
        (error) => {
          console.error('Error occurred during recharge:', error);
        }
      );
    } else {
      console.log("Recharge form is invalid");
    }
  }

  verifyOrder() {
    if (this.rechargeForm.valid)
    
     {
      const formData = this.rechargeForm.value;
      this.auth.verifyOrder(formData.orderId, formData.paymentId, formData.razorpaySignature)
        .subscribe(
          (response) => {
            console.log('Order verification successful:', response);
          },
          (error) => {
            console.error('Error occurred during order verification:', error);
          }
        );
    } else {
      console.log("Order form is invalid");
    }

 
     }
  
  
    }
