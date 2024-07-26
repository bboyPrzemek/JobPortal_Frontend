import { Component, Input } from '@angular/core';

@Component({
  selector: 'joboffer',
  standalone: true,
  imports: [],
  templateUrl: './joboffer.component.html',
  styleUrl: './joboffer.component.css'
})
export class JobofferComponent {
  @Input() title = '';
  @Input() companyName = '';
  @Input() location = '';
  @Input() imgSrc = '';



}
