import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  styleUrl: './awards.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class AwardsComponent {
  awards: Award[] = [];
  showContent = false;

  constructor(private service: SettingService) { }

  ngOnInit() {
    this.showContent = false;

    this.service.awards$.subscribe((data) => {
      console.log('COMPONENT AWARDS: ', data)
      this.awards = data;
      this.showContent = true;
    });
  }
}