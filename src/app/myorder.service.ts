import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyorderService {

  constructor(private order:HttpClient) { }
  getData():Observable<any>{
    const url='http://localhost:8080/route/read';
    return this.order.get(url);
  }
}

