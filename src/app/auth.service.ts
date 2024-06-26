
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Gallery } from 'gallery';
import { environment } from 'src/environments/environment.prod';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseapi=environment.apiurl;

  constructor(private http:HttpClient) { }
    signup(data:any):Observable<any>{

      return this.http.post(this.baseapi +`/register`,data)
    }
  
    signin(data:any):Observable<any>{


      return this.http.post(this.baseapi +`/login`,data)
    }
   
    getprofile():Observable<any>{
      const Headers ={
         'Authorization': "Bearer " + localStorage.getItem('token'),
      

      }
      
      return this.http.get<any>(this.baseapi+`/profile/`,{headers:Headers})
    }
    logout(){
     localStorage.clear();
    }
   

    getCurrentUser() {
      // Retrieve user information from localStorage
      const userString = localStorage.getItem('currentUser');
      return userString ? JSON.parse(userString) : null;
    }

    getDetails():Observable<any>{
      return this.http.get(`http://localhost:5000/auth/read`)
      }
  upload(file:any):Observable<any> { 
  
      // Create form data 
      const formData = new FormData();  
        
      // Store form name as "file" with file data 
      formData.append("file", file, file.name); 
        
      // Make http post request over api 
      // with formData as req 
      return this.http.post(`http://localhost:5000/auth/read`, formData) 
  } 

  forgotPassword(email: string): Observable<any> {
    // Make an HTTP request to your backend API to initiate the forget password process
    return this.http.post('http://localhost:8080/api/forgotpassword', email );
  
  }
 
  resetPassword(data:any): Observable<any> {
    // Make an HTTP request to your backend API to initiate the forget password process
    return this.http.post('http://localhost:8080/api/resetpassword', data );
  
  }
  recharge(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/createOrder', data);
  }
  // verifyOrder(data: any): Observable<any> {
  //   return this.http.post('http://localhost:8080/api/verifyOrder', data);
  // }

  
//   verifyOrder(orderId: string, paymentId: string, razorpaySignature: string): Observable<any> {
//     // Define the request body containing order_id and payment_id
//     const requestBody = { orderId, paymentId, razorpaySignature };

//     // Make an HTTP POST request to your server endpoint
//     return this.http.post<any>('http://localhost:8080/api/verifyOrder', requestBody, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
// }



verifyOrder(orderId: string, paymentId: string, razorpaySignature: string): Observable<any> {
    // Define the request body containing orderId, paymentId, and razorpaySignature
    const requestBody = { orderId, paymentId, razorpaySignature };

    // Make an HTTP POST request to your server endpoint
    return this.http.post<any>('http://localhost:8080/api/verifyOrder', requestBody, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(
      catchError(error => {
        // Handle error
        console.error('Error occurred:', error);
        return throwError('Verification failed. Please try again.');
      })
    );
}

} 

    


