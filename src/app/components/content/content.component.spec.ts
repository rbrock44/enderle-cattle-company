import { TestBed } from '@angular/core/testing';
import { ContentComponent } from './content.component';

describe('ContentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ContentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
