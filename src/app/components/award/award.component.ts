import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Award } from '../../objects/award';

@Component({
  selector: 'app-award',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './award.component.html',
  styleUrl: './award.component.scss'
})
export class AwardComponent {
  @Input() award: Award = {
    year: 0,
    name: '',
    eventName: '',
    category: '',
    shower: '',
    animalName: '', 
    location: '',
  }
}