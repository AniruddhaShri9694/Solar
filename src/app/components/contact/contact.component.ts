import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email = 'gauravmali@sionenergy.in';
  phone = '+917030469277';
  
  name = '';
  contactEmail = '';
  message = '';
  submitted = false;

  sendEmail(): void {
    if (this.email) {
      // Open Gmail with pre-filled email
      const subject = 'Sion Energy - Solar Solution Inquiry';
      const body = `Name: ${this.name}\nEmail: ${this.contactEmail}\n\nMessage:\n${this.message}`;
      const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${this.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, '_blank');
    }
  }

  handleSubmit(): void {
    if (this.name && this.contactEmail && this.message) {
      this.sendEmail();
      this.submitted = true;
      this.resetForm();
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }
  }

  resetForm(): void {
    this.name = '';
    this.contactEmail = '';
    this.message = '';
  }

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
}
