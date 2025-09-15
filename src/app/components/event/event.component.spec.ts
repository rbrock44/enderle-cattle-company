import { TestBed } from '@angular/core/testing';
import { AwardComponent } from './event.component';

describe('AwardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AwardComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
