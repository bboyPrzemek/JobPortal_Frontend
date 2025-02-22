import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'joboffer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joboffer.component.html',
  styleUrl: './joboffer.component.css'
})
export class JobofferComponent {
  @Input() title = '';
  @Input() companyName = '';
  @Input() location = '';
  @Input() imgSrc = '';
  @Input() salaryMin = '';
  @Input() salaryMax = '';
  @Input() position : { id: string, name:string } = {id : '', name : ''};
  @Input() technology : {id : string, name : string}[] = [];
  @Input() experience : {id : string, name : string}[] = [];
  @Input() worktype : {id : string, name : string}[] = [];
}
