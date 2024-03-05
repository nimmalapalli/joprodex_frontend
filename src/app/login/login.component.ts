import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ForgetpasswordComponent } from '../forgetpassword/forgetpassword.component';
import { MatDialog } from '@angular/material/dialog';
import { NavbarService } from '../navbar.service';
import { Navbar2Service } from '../navbar2.service';
import { LoaderService } from '../loader/loader.service';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
  data:any;
  hide = true;
  loading$ = this.loader.loading$;
 loginForm!:FormGroup
 
 constructor(private fb:FormBuilder,private auth:AuthService,private router:Router,public dialog: MatDialog,public nav: NavbarService,public nav1: Navbar2Service,public loader:LoaderService,public route:ActivatedRoute,private snackBar:MatSnackBar){
  this.data={_id:this.route.snapshot.params['_id']}
  this.loginForm = this.fb.group({
    "email":["",Validators.required],
    "password":["",Validators.required]
  })
 }
 ngOnInit() {
  this.nav.show();
  this.nav1.hide();
 
}
  login(){
    const data = this.loginForm.value;
    this.loader.show()
    this.auth.signin(data).subscribe((res:any)=>{
      if(res.success){
        localStorage.setItem('token', res.token);
        this.loader.hide()
        this.snackBar.open(JSON.stringify(res.message));
      // alert(res.message);
      this.getProfile();

    }else{
      // alert(res.message);
      this.snackBar.open(JSON.stringify(res.message));
    }
    }),(err:any) =>{
     alert(`login failed`)
    }
  
  }
  getProfile(){
    this.auth.getprofile().subscribe((res)=>{
      this.data=res['data'];
       console.log(res)
       this.router.navigateByUrl('/home/'+this.data['_id'])
    })
    } 
  openDialog() {
    const dialogRef = this.dialog.open(ForgetpasswordComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
