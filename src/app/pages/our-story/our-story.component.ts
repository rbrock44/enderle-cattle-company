import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [
    CommonModule,
  ],
  providers: [],
  templateUrl: './our-story.component.html',
  styleUrl: './our-story.component.scss'
})
export class OurStoryComponent {

  constructor(
  ) {
  }
}