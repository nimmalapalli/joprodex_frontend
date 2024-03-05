import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map, shareReplay } from 'rxjs';
import { NavbarService } from '../navbar.service';
import { Navbar2Service } from '../navbar2.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  json:string="null";
data:any;
  headers: any;
constructor( public auth:AuthService,public nav: NavbarService,public nav1: Navbar2Service,private http:HttpClient,private router:ActivatedRoute){
  //  this.data=this.router.snapshot.params['_id']
}
private breakpointObserver = inject(BreakpointObserver);
isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
.pipe(
  map(result => result.matches),
  shareReplay()
);

ngOnInit(){
  this.getProfile();
  this.nav.hide();
  this.nav1.show();
 
}

getProfile(){
this.auth.getprofile().subscribe((res)=>{
  this.data=res['data'];
   console.log(res)

})
} 
  

}

