import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import {NavfilterComponent} from './navfilter/navfilter.component';
import { JobofferComponent } from './joboffer/joboffer.component';
import { JobofferlistComponent } from './jobofferlist/jobofferlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, NavfilterComponent, JobofferComponent, JobofferlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
