import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SettingService } from '../../services/settings.service';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ],
  templateUrl: './get-in-touch.component.html',
  styleUrl: './get-in-touch.component.scss'
})
export class GetInTouchComponent {
  form: FormGroup;
  submitted = false;
  sending = false;
  successMessage = '';
  errorMessage = '';

  captchaQuestion = '';
  private captchaAnswer = 0;

  constructor(private fb: FormBuilder, private service: SettingService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', Validators.required],
      // honeypot, see template
      website: [''],
      captcha: ['', [Validators.required, (control: AbstractControl) => this.validateCaptcha(control)]],
    });

    this.newCaptcha();
  }

  newCaptcha(): void {
    const left = Math.floor(Math.random() * 9) + 1;
    const right = Math.floor(Math.random() * 9) + 1;

    this.captchaAnswer = left + right;
    this.captchaQuestion = `${left} + ${right} =`;

    this.form.controls['captcha'].setValue('');
    this.form.controls['captcha'].updateValueAndValidity();
  }

  showError(name: string): boolean {
    return this.submitted && this.form.controls[name].invalid;
  }

  submit(): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.form.invalid) return;

    // honeypot tripped, act like it worked so the bot moves along
    if (this.form.value.website) {
      this.reset();
      this.successMessage = 'Thanks for reaching out! We will get back to you soon.';
      return;
    }

    const { website, captcha, ...body } = this.form.value;

    this.sending = true;
    this.service.getInTouch(body).subscribe({
      next: () => {
        this.sending = false;
        this.reset();
        this.successMessage = 'Thanks for reaching out! We will get back to you soon.';
      },
      error: () => {
        this.sending = false;
        this.newCaptcha();
        this.errorMessage = 'Something went wrong. Please try again or give us a call.';
      }
    });
  }

  private reset(): void {
    this.form.reset({ name: '', email: '', phone: '', message: '', website: '', captcha: '' });
    this.submitted = false;
    this.newCaptcha();
  }

  private validateCaptcha(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;

    return Number(control.value) === this.captchaAnswer ? null : { captcha: true };
  }
}
