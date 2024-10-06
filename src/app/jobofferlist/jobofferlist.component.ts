import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { JobofferComponent } from '../joboffer/joboffer.component';
import { JobOfferService } from '../job-offer.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jobofferlist',
  standalone: true,
  imports: [JobofferComponent, CommonModule],
  templateUrl: './jobofferlist.component.html',
  styleUrl: './jobofferlist.component.css'
})

export class JobofferlistComponent implements OnInit, OnChanges{

  @Input() searchKey : string = '';
  jobOffers : any[] = [];

  constructor(private jobOfferService : JobOfferService){}


  ngOnChanges(changes: SimpleChanges): void {
    this.searchOffers();
  }

  ngOnInit() {
    this.jobOfferService.getJobOffers().subscribe(result=>{
    this.jobOffers = result;
      });
    }

   searchOffers(){
    this.jobOfferService.searchOffers(this.searchKey).subscribe(result=>{
      this.jobOffers = result;
        });
      }
   }


