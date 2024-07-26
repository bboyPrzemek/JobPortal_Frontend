import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'langfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './langfilter.component.html',
  styleUrl: './langfilter.component.css'
})
export class LangfilterComponent {
  @Input() imgSrc = '';
  @Input() title = '';
  clicked : Boolean = false;

  onClick(event: Event){
    this.clicked = !this.clicked;
    console.log(this.clicked);
   
  }

}
