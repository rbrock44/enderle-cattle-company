import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from "../../components/content/content.component";

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent
],
  providers: [],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {

  constructor(
  ) {
  }
}