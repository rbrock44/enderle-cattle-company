import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    CommonModule,
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