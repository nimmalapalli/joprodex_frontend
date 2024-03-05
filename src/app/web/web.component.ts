import { Component, OnInit } from '@angular/core';
import { Navbar2Service } from '../navbar2.service';
export class Card{
name!:string;
}
@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {
 cards:Card[]=[
  {name:'naren'},
  {name:'surya'}
 ]
isBoolean:boolean=false;
constructor(public nav1: Navbar2Service,){}
  tabs: any;
  selected: any;
  ngOnInit() {
 
    this.nav1.hide();
   
  }

}
