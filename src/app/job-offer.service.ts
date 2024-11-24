import { HttpClient } from  '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {

  private url = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getJobOffers(){
    return this.http.get<any>(this.url);
  }

  searchOffers(queryParams : String){
    return this.http.get<any>(this.url + "/search?" + queryParams);
  }

}
