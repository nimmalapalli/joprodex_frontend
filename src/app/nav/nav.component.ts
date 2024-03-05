import { Component, HostBinding, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { RechargedialogComponent } from '../rechargedialog/rechargedialog.component';
import { NavbarService } from '../navbar.service';
import { AuthService } from '../auth.service';
import {  ActivatedRoute, NavigationStart, Route, Router } from '@angular/router';
import { Navbar2Service } from '../navbar2.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { OverlayContainer } from '@angular/cdk/overlay';
import { FormControl } from '@angular/forms';
import { LoaderService } from '../loader/loader.service';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  showHead: boolean=false;
  isOpened:boolean=false;
  isOpen:boolean=false;
  isOpens:boolean=false;
  data:any;
  private breakpointObserver = inject(BreakpointObserver);
  user:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    constructor(public dialog: MatDialog,private _snackBar: MatSnackBar, public nav: NavbarService,public nav1: Navbar2Service,private auth:AuthService,private router:Router,private overlay:OverlayContainer,public loader:LoaderService,private route:ActivatedRoute) {
      this.user= this.auth.getCurrentUser()
      console.log(this.auth.getCurrentUser());
      this.data={_id:this.route.snapshot.params['_id']}
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] == '/' || event['url'] == '/register') {
            this.showHead = false;
          } else {
            // console.log("NU")
            this.showHead = true;
          }
        }
        
      });
      this.getProfile()
    }
   
    onLogout(){
      this.auth.logout();
      this.router.navigateByUrl('/')
    }

    searchText = '';
    characters = [
    
   
    ];

    durationInSeconds = 5;
    openSnackBar() {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
    openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
      this.dialog.open(RechargedialogComponent, {
        width: '450px',
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
  url = '';
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  toggleOpenClosed() {
         this.isOpened = !this.isOpened;
  }
  toggleOpenClose() {
    this.isOpen = !this.isOpen;
}
toggleCloseOpen() {
  this.isOpens = !this.isOpens;
}
isDarkTheme:boolean = true;;
ngOnInit(): void {
  this.nav1.hide();
  this.toggleControl.valueChanges.subscribe(
    (darkMode:any)=>{
      this.className= darkMode ? this.darkClassName : this.lightClassName;
      if(darkMode){
        this.overlay.getContainerElement().classList.add(this.darkClassName);

      }else{
        this.overlay.getContainerElement().classList.remove(this.darkClassName);
      }

    }
  )
  

  }
  
  toggleControl = new FormControl(false);
  @HostBinding('class') className = '';
  darkClassName = 'theme-dark';
  lightClassName = 'theme-light';
  getProfile(){
    this.auth.getprofile().subscribe((res)=>{
      this.data=res['data'];
       console.log(res)
   
    })
    } 
}
