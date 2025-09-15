import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { ADDRESS_1, ADDRESS_2, EMAIL, GET_IN_TOUCH_PARAM, MAIL_TO, PHONE_NUMBER } from '../../constants/constants';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent,
    // GetInTouchComponent
  ],
  providers: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  address1 = ADDRESS_1;
  address2 = ADDRESS_2;
  phoneNumber = PHONE_NUMBER;
  email = EMAIL;
  mailTo = MAIL_TO;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.route?.queryParamMap.subscribe((params) => {
      const param = params.get(GET_IN_TOUCH_PARAM);
      if (param === 'true') {
        this.scrollToForm();
      }
    });
  }

  scrollToForm() {
    setTimeout(() => {
      const formElement = document.getElementById('form-section');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}