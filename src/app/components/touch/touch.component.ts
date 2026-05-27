import { Component } from '@angular/core';

@Component({
  selector: 'app-touch',
  standalone: true,
  imports: [],
  templateUrl: './touch.component.html',
  styleUrl: './touch.component.scss'
})
export class TouchComponent {

  email = 'gauravmali@sionenergy.in';
  phone = '+917030469277';

  
  makeCall(): void {
    if (this.phone) {
      window.location.href = `tel:${this.phone}`;
    }
  }

  openEmail(): void {
    const subject = 'Hello! I am interested in your Solar Energy services';
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${this.email}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank');
  }

  openInstagram(): void {
    window.open('https://www.instagram.com/sion_energy_solar/', '_blank');
  }

  openWhatsApp(): void {

  const message =
    'Hello Sion Energy, I would like to know more about your solar solutions for our society.';

  const whatsappUrl =
    `https://wa.me/${this.phone}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
}
}
