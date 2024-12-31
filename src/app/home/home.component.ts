import { Component, OnInit } from '@angular/core';
import { JobofferlistComponent } from '../jobofferlist/jobofferlist.component';
import { JobOfferService } from '../job-offer.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchModel } from '../search-model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [ JobofferlistComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  constructor(private jobOfferService: JobOfferService, private router: Router, private activated: ActivatedRoute) {}

  visibility: string = "";
  searchModel = new SearchModel();
  sort = '';
  jobOffers: any = [];

  ngOnInit() {
    this.activated.queryParams.subscribe(params => {
      this.search(params);
    })
  }

  onSubmit(form: NgForm) {
    const formData = { ...form.value };
    let params = this.removeEmptyParams(this.mergeObj(formData, this.getSortParams()));
    this.router.navigate([''], { queryParams: params });
  }

  onSort() {
    const currentParams = {...this.router.routerState.snapshot.root.queryParams};
    let params = this.removeEmptyParams(this.mergeObj(currentParams, this.getSortParams()));
    this.router.navigate([''], { queryParams: params });
  }

  mergeObj(obj1: Object, obj2: Object) {
    return { ...obj1, ...obj2 };
  }

  showFilters() {
    this.visibility = 'active';
  }

  close() {
    this.visibility = 'inactive';
  }

  search(queryParams: any) {
    this.jobOfferService.searchOffers(new URLSearchParams(queryParams).toString()).subscribe(result => {
      this.jobOffers = result;
    });
  }

  removeEmptyParams(obj: any) {
    Object.keys(obj).forEach((key) => (obj[key] === "") && delete obj[key]);
    return obj;
  }

  removeParam(){

  }

  getSortParams() {
    const s = this.sort.split('_');
    return {
      "orderBy": s[0],
      "sort": s[1]
    }
  }
}
