import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private url = 'http://localhost:8080/location/';

  constructor(private http: HttpClient) {

  }
  search(city : String){
    return this.http.get<any>(this.url + city,
      {
        headers: {'Content-Type':'application/json; charset=utf-8'}
      });
  }
}


