import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { ADDRESS_1, ADDRESS_2, EMAIL, MAIL_TO, PHONE_NUMBER } from '../../constants/constants';

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
}