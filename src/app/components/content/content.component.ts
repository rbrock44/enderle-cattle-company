import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    BannerComponent,
    CommonModule, 
  ],
  providers: [
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
}