import { Component, HostListener} from '@angular/core';
import { LocationService } from '../location.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'city-search',
  standalone: true,
  imports:  [CommonModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css'
})
export class CitySearchComponent {

  constructor(private locationService : LocationService){}

  location : string = "";
  locationId : string = "";
  locations : any = [];
  showResults : Boolean = false;

  onInput(event: any) {
    this.locationService.search(event.target.value).subscribe(result=>{
      if (result.length > 0){
        this.locations = result;
        this.showResults = true;
      }
    });
  }

  onClick(event:any){
    this.location = event.currentTarget.innerText;
    this.locationId = event.currentTarget.value;
    this.showResults = false;
  }

  onKeyup(event: any){
    if (this.location != ""){
      const key = event.keyCode || event.charCode;
      if (key === 8){
        this.clear();
      }
    }
  }

  clear(){
    this.location = "";
    this.locationId = "";
  }

  @HostListener('document:click')
  hideResults() {
    this.showResults = false;
  }
 }




