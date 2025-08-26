import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { PAGE_MAP } from '../../constants/constants';
import { SettingService } from '../../services/settings.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,

  ],
  providers: [
    SettingService
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    private location: Location,
    public service: SettingService
  ) {
  }

  onNavClick(pageNumber: number): void {
    const url: string = this.service.getUrlWithPageParam(pageNumber)
    this.location.replaceState(url);
    
    this.service.setShow(pageNumber);

    // console.log(`Header navigation clicked: ${url}`);
  }
}