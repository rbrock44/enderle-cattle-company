import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { EventComponent } from '../../components/event/event.component';
import { DEBUG } from '../../constants/constants';
import { UpcomingEvent } from '../../objects/upcoming-event';
import { SettingService } from '../../services/settings.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent,
    EventComponent
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  upcomingEvents: UpcomingEvent[] = [];

  constructor(
    public service: SettingService,
  ) {
    this.service.upcomingEvents$.subscribe((data) => {
      if (DEBUG)
        console.log('COMPONENT UPCOMING EVENTS: ', data)
      // TODO: once more data, only show upcoming events
      // this.upcomingEvents = onlyUpcomingEvents(data);
      this.upcomingEvents = data;
    });
  }
}