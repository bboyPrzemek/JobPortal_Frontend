import { Component } from '@angular/core';
import { CitySearchComponent } from '../city-search/city-search.component';
import { JobofferlistComponent } from '../jobofferlist/jobofferlist.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CitySearchComponent, JobofferlistComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchKey : string = "";

}
