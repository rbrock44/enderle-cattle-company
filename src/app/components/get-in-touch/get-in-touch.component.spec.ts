import { TestBed } from '@angular/core/testing';
import { GetInTouchComponent } from './get-in-touch.component';

describe('GetInTouchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetInTouchComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(GetInTouchComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
