import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { Highlight } from '../../objects/highlight';
import { OUR_STORY_HIGHLIGHTS } from '../../constants/constants';

@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent
  ],
  providers: [],
  templateUrl: './our-story.component.html',
  styleUrl: './our-story.component.scss'
})
export class OurStoryComponent {
  highlights: Highlight[] = OUR_STORY_HIGHLIGHTS

  getTitle(name: string): string {
    return name + ' ' + ('Company' === name ? 'Overview' : 'Highlight');
  }
}