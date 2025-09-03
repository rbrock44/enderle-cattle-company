import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { SettingService } from '../../services/settings.service';
import { ADDRESS_1, ADDRESS_2, PHONE_NUMBER } from "../../constants/constants";


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

  onNavClick(pageNumber: number): void {
    const url: string = this.service.getUrlWithPageParam(pageNumber);
    this.location.replaceState(url);
    
    this.service.setShow(pageNumber);

    // console.log(`Footer navigation clicked: ${url}`);
  }
}