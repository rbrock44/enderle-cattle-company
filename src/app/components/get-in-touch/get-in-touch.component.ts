import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SettingService } from '../../services/settings.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-in-touch',
  standalone: true,
  imports: [
    CommonModule,
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
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private service: SettingService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      captcha: ['', Validators.required],
    });
  }

  async submit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.form.invalid) return;

    this.service.getInTouch(this.form.value).subscribe(
      () => {
        this.successMessage = 'Your message has been sent!';
        this.form.reset();
        this.submitted = false;
      },
      () => {
        this.errorMessage = 'Something went wrong. Please try again.';
      }
    );
  }
}