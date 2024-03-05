import { Component, asNativeElements } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  galleryForm!: FormGroup;
  imageFile!: File;
  imageTitle = '';
  imageDesc = '';
  checked = false;
  hide = true;
  signupform!:FormGroup;
  shortLink: string = ""; 
 // Flag variable 
  file!: File ;
  constructor( private cv:FormBuilder,private auth:AuthService,private snackBar:MatSnackBar ){
   this.signupform =this.cv.group({
    name:["",Validators.required],
    email:["",Validators.required],
    mobile:["",Validators.required],
    password:["",Validators.required],
    companyname:["",Validators.required],
   })
 

  }
  signup(){
  const data = this.signupform.value;
  console.log(this.signupform.value)
  delete data['confirm'];
  this.auth.signup(data).subscribe((res:any)=>{
    this.snackBar.open(JSON.stringify(res.message));
  })
      
      
    }

    onChange(event:any) { 
      this.file = event.target.files[0]; 
  } 

  // OnClick of button Upload 


  }

