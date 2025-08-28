import { TestBed } from '@angular/core/testing';
import { AwardsComponent } from './awards.component';

describe('AwardsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AwardsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
