import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { JobOfferService } from '../job-offer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-job-offer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-job-offer.component.html',
  styleUrl: './create-job-offer.component.css'
})
export class CreateJobOfferComponent {

  title : String = '';
  details : String = '';
  salaryMin : number = 0;
  salaryMax : number = 0;
  location : String = '';
  experiences : [] = [];
  technologies : [] = [];
  worktypes : [] = [];
  position: String = '';

  constructor(private jobOfferService:JobOfferService, private router : Router){}


  onSubmit(form:NgForm){
    console.log(form.value)
    this.jobOfferService.createJobOffer(form.value).subscribe(response=>{
      if (response == "Created"){
        alert("created");
        this.clearFormData();
    }
  },(error)=> {
      alert(error.error);
    });

  }

  clearFormData(){
    this.title = '';
    this.details = '';
    this.salaryMin  = 0;
    this.salaryMax  = 0;
    this.location  = '';
    this.experiences = [];
    this.technologies  = [];
    this.worktypes  = [];
    this.position = '';
  }
}
