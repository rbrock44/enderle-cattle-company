import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
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

  onNavClick(pageNumber: number): void {
    const url: string = this.service.getUrlWithPageParam(pageNumber);
    this.location.replaceState(url);
    
    this.service.setShow(pageNumber);

    // console.log(`Footer navigation clicked: ${url}`);
  }
}