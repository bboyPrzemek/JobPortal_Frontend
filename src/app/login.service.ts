import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {}
  private url = 'http://localhost:8080/login';

  login(params : String){
     const headers= new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded'
      })

    return this.http.post<any>(this.url, params, {headers: headers, withCredentials : true})
  }
}


