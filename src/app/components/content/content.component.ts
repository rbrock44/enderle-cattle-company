import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    BannerComponent
  ],
  providers: [
  ],
  templateUrl: './content.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './content.component.scss'
})
export class ContentComponent {
}