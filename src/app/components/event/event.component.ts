import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UpcomingEvent } from '../../objects/upcoming-event';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent {
  @Input() event: UpcomingEvent = {
    year: 0,
    startDate: '',
    endDate: '',
    name: '',
    location: '',
    description: '',
  }
}