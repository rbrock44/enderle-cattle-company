import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SettingService } from '../../services/settings.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    public service: SettingService,
    private route: ActivatedRoute,
  ) {
    this.route?.queryParamMap.subscribe((params) => {
      const pageParam = params.get('page');
      if (pageParam) {
        this.service.setShowWithUrlParam(pageParam);
      }
    });
  }
}