import { Component, OnInit } from '@angular/core';
import { CitySearchComponent } from '../city-search/city-search.component';
import { JobofferlistComponent } from '../jobofferlist/jobofferlist.component';
import { JobOfferService } from '../job-offer.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchModel } from '../search-model';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CitySearchComponent, JobofferlistComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent implements OnInit{

  constructor(private jobOfferService : JobOfferService){

  }

  visibility : string =  "";
  searchModel = new SearchModel();
  jobOffers : any = [];


  ngOnInit() {
    console.log('1');
    // this.initialized = true;
    this.jobOfferService.getJobOffers().subscribe(result=>{
    this.jobOffers = result;
      });
    }

  onSubmit(form : NgForm){
    const queryParams = ( new URLSearchParams(form.value).toString());
    this.jobOfferService.searchOffers(queryParams).subscribe(result=>{
      this.jobOffers = result;
      });
    }

  showFilters(){
    this.visibility = 'active';
  }

  close(){
    this.visibility = 'inactive';
  }
}
