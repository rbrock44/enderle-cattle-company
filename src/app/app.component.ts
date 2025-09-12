import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { PAGE_PARAM } from './constants/constants';
import { AwardsComponent } from "./pages/awards/awards.component";
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { OurStoryComponent } from "./pages/our-story/our-story.component";
import { SettingService } from './services/settings.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AwardsComponent,
    CommonModule,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    RouterOutlet,
    OurStoryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'enderle-cattle-company';
  showPage: boolean[] = [true, false, false, false]

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

    this.service.showPage$.subscribe(show => {
      this.showPage = show;
    });

    // this.service.startSubscriptions();
  }
}
