import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from "../../components/content/content.component";
import { Award } from '../../objects/award';
import { SettingService } from '../../services/settings.service';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent
  ],
  providers: [],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent {
  awards: Award[] = [];

  constructor(private service: SettingService) { }

  ngOnInit() {
    this.service.awards$.subscribe((data) => {
      this.awards = data;
    });
  }
}