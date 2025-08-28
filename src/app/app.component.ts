import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { AwardsComponent } from "./pages/awards/awards.component";
import { OurStoryComponent } from "./pages/our-story/our-story.component";
import { SettingService } from './services/settings.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    AwardsComponent,
    OurStoryComponent
  ],
  providers: [
    SettingService
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
