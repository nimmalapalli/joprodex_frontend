import { Component, OnInit } from '@angular/core';
import { Navbar2Service } from './navbar2.service';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'aggregate-courier';
  constructor(public nav1: Navbar2Service,public nav: NavbarService,){}
 
  ngOnInit() {
    this.nav.show();
    this.nav1.hide();
   
  }
}
