import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';

interface Highlight {
  name: string;
  image: string,
  description: string,
}

function createHighlight(name: string, description: string): Highlight {
  return {
    name,
    image: name.toLowerCase(),
    description
  }
}

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

  highlights: Highlight[] = [
    createHighlight('Company', 'This is a company overview'),
    createHighlight('Kenzie', 'This is a Kenzie overview'),
    createHighlight('Cody', ''),
    createHighlight('Maebry', ''),
    createHighlight('McCaffrey', ''),
    createHighlight('Colter', ''),
  ]

  getTitle(name: string): string {
    return name + ' ' + ('Company' === name ? 'Overview' : 'Highlight');
  }

  getByName(name: string): Highlight {
    return this.highlights.filter(x => x.name === name)[0];
  }
}