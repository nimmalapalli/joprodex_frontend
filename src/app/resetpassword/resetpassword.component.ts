import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss'],
 
  
})
export class ResetpasswordComponent 
 {
  password: string = '';
  hide: boolean = true;

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
  resetPasswordForm!:FormGroup;
  constructor(private form: FormBuilder){
    this.resetPasswordForm=this.form.group({
      newpassword: '',
      confirmpassword: ''

    })
  }
  onSubmit(){
    if(this.resetPasswordForm.valid){
      console.log(this.resetPasswordForm.value)
    }
    else{
      console.log("invalid")
    }
  }
   
  }
  

