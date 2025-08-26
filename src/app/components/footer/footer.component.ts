import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SettingService } from '../../services/settings.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    
  ],
  providers: [
    SettingService
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(
    public service: SettingService
  ) {
  }

  currentYear = new Date().getFullYear();

  onNavClick(pageNumber: number): void {
    this.service.setShow(pageNumber);

    // console.log(`Navigation clicked: ${pageNumber}`);
  }
}