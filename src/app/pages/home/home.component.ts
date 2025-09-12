import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SettingService } from '../../services/settings.service';
import { ActivatedRoute } from '@angular/router';
import { PAGE_PARAM } from '../../constants/constants';
import { ContentComponent } from '../../components/content/content.component';
import { UpcomingEvent } from '../../objects/upcoming-event';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent
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
  }
}