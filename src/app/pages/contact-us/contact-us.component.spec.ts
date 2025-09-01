import { TestBed } from '@angular/core/testing';
import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ContactUsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
