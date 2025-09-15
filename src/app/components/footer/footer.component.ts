import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { ADDRESS_1, ADDRESS_2, DEBUG, PAGE_NAMES, PHONE_NUMBER, URL_FACEOOK, URL_LINKED_IN, URL_TWITTER } from "../../constants/constants";
import { SettingService } from '../../services/settings.service';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
  ],
  providers: [
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(
    private location: Location,
    public service: SettingService
  ) {
  }

  currentYear = new Date().getFullYear();
  address1 = ADDRESS_1;
  address2 = ADDRESS_2;
  phoneNumber = PHONE_NUMBER;
  urlTwitter: string = URL_TWITTER;
  urlFacebook: string = URL_FACEOOK;
  urlLinkedIn: string = URL_LINKED_IN;
  pageNames: string[] = PAGE_NAMES;

  onNavClick(pageNumber: number): void {
    const url: string = this.service.getUrlWithPageParam(pageNumber);
    this.location.replaceState(url);

    this.service.setShow(pageNumber);

    if (DEBUG)
      console.log(`Footer navigation clicked: ${url}`);
  }
}