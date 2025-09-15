import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { SettingService } from '../../services/settings.service';
import { DEBUG, PAGE_NAMES, URL_FACEOOK, URL_LINKED_IN, URL_TWITTER } from '../../constants/constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  pageNames: string[] = PAGE_NAMES;
  urlTwitter: string = URL_TWITTER;
  urlFacebook: string = URL_FACEOOK;
  urlLinkedIn: string = URL_LINKED_IN;

  constructor(
    private location: Location,
    public service: SettingService
  ) {
  }

  onNavClick(pageNumber: number): void {
    const url: string = this.service.getUrlWithPageParam(pageNumber)
    this.location.replaceState(url);
    
    this.service.setShow(pageNumber);

    if (DEBUG)
      console.log(`Header navigation clicked: ${url}`);
  }
}