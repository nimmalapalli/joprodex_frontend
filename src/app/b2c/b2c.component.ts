import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild, inject} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginator } from '@angular/material/paginator';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CrudService } from '../crud.service';
import { Order } from '../order';
import { User } from '../user';
import { Users } from '../users';
interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-b2c',
  templateUrl: './b2c.component.html',
  styleUrls: ['./b2c.component.scss']
})
export class B2cComponent implements OnInit{
  public User!:Users[];
  private breakpointObserver = inject(BreakpointObserver);
  
  ngOnInit(){
   this.readOrder();
  }

  readOrder(){
 this._order.readorder().subscribe(
  (res)=>{
  console.log(res)
  this.User= res['msg']

 },
 (err)=>{
  console.log(err);
  
 }
 )
  }
  constructor(private _order:CrudService){}
  selectedValue!: string;
 
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
