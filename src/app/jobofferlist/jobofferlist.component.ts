import { Component } from '@angular/core';
import { JobofferComponent } from '../joboffer/joboffer.component';

@Component({
  selector: 'jobofferlist',
  standalone: true,
  imports: [JobofferComponent],
  templateUrl: './jobofferlist.component.html',
  styleUrl: './jobofferlist.component.css'
})
export class JobofferlistComponent {

}
