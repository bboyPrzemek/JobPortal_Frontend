import { Component } from '@angular/core';
import { CitySearchComponent } from '../city-search/city-search.component';
import { JobofferlistComponent } from '../jobofferlist/jobofferlist.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CitySearchComponent, JobofferlistComponent, FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchKey : string = "";
  visibility = 'inactive';


  showFilters(){
    this.visibility = 'active';
  }

  close(){
    this.visibility = 'inactive';
  }
}
