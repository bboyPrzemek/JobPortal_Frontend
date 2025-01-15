import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, NavigationEnd, NavigationStart, Scroll } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-adminpanel',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './adminpanel.component.html',
  styleUrl: './adminpanel.component.css'
})

export class AdminpanelComponent implements OnInit {

  constructor(private router: Router) {}

  currentRoute: String = '';

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof Scroll) {
        this.currentRoute = (event.routerEvent.url.substring(event.routerEvent.url.lastIndexOf('/') + 1));
      }
    });
  }
}
