import { Component } from '@angular/core';
import { LangfilterComponent } from '../langfilter/langfilter.component';
import { LocationbtnComponent } from '../locationbtn/locationbtn.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'navfilter',
  standalone: true,
  imports: [LangfilterComponent, LocationbtnComponent, CommonModule],
  templateUrl: './navfilter.component.html',
  styleUrl: './navfilter.component.css'
})



export class NavfilterComponent {
  langFilters = [
    { name : 'JS', iconURL : '/assets/images/icons/js.png'},
    { name : 'JAVA', iconURL : '/assets/images/icons/java.png'},
    { name : 'PHP', iconURL : '/assets/images/icons/php.png'},
    { name : 'PYTHON', iconURL : '/assets/images/icons/python.png'},
    { name : 'C++', iconURL : '/assets/images/icons/cpp.png'},
    { name : 'Database', iconURL : '/assets/images/icons/db.png'},
    { name : 'C', iconURL : '/assets/images/icons/c.png'},
    { name : 'HTML', iconURL : '/assets/images/icons/html.png'},
    { name : 'C#', iconURL : '/assets/images/icons/c-sharp.png'},
    { name : 'Kotlin', iconURL : '/assets/images/icons/kotlin.png'},
    { name : 'Delphi', iconURL : '/assets/images/icons/delphi.png'},
    { name : 'Admin', iconURL : '/assets/images/icons/admin.png'},
    { name : 'Testing', iconURL : '/assets/images/icons/testing.png'},
    { name : 'Swift', iconURL : '/assets/images/icons/swift.png'},
    { name : 'Security', iconURL : '/assets/images/icons/security.png'},
    { name : 'UX', iconURL : '/assets/images/icons/ux.png'},
    { name : 'DevOps', iconURL : '/assets/images/icons/devops.png'},
    { name : 'Go', iconURL : '/assets/images/icons/go.png'}, 
    { name : 'Analytics', iconURL : '/assets/images/icons/analytics.png'},
    { name : 'Mobile', iconURL : '/assets/images/icons/mobile.png'},
  ]
}
