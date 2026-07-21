import { Component, Input } from '@angular/core';
import { Award } from '../../objects/award';

@Component({
  selector: 'app-award',
  standalone: true,
  imports: [],
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
    date: '',
  }
}