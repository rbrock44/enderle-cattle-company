import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SettingService } from '../../services/settings.service';
import { ActivatedRoute } from '@angular/router';
import { PAGE_PARAM } from '../../constants/constants';
import { ContentComponent } from '../../components/content/content.component';

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

  constructor(
    public service: SettingService,
    private route: ActivatedRoute,
  ) {
    this.route?.queryParamMap.subscribe((params) => {
      const pageParam = params.get(PAGE_PARAM);
      if (pageParam) {
        this.service.setShowWithUrlParam(pageParam);
      }
    });
  }
}