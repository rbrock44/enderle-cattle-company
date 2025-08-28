import { TestBed } from '@angular/core/testing';
import { OurStoryComponent } from './our-story.component';

describe('OurStoryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurStoryComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(OurStoryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
