import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { AwardsComponent } from "./pages/awards/awards.component";
import { OurStoryComponent } from "./pages/our-story/our-story.component";
import { SettingService } from './services/settings.service';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

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
  providers: [
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'enderle-cattle-company';

  constructor(
    public service: SettingService
  ) {
  }
}
