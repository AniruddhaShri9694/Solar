import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  fullName = '';
societyName = '';
pinCode = '';
whatsappNumber = '';
agmApprovalStatus = '';
electricityBill = '';
designation = '';

googleScriptURL = "https://script.google.com/macros/s/AKfycbx608eX6DwL2OzrZ9my-Csncf6dcTh7AHIFo4jCdvg3QwKM_DB8eahNi4PAqkmEwjYH2w/exec"

constructor(private http: HttpClient) {}

 sendEmail(): void {
  if (this.email) {

    const subject = 'Sion Energy - Free Solar Quote Request';

    const body = `Full Name: ${this.fullName}

Housing Society Name: ${this.societyName}

PIN Code: ${this.pinCode}

WhatsApp Number: ${this.whatsappNumber}

${this.agmApprovalStatus ? `AGM Approval Status: ${this.agmApprovalStatus}` : ''}

${this.electricityBill ? `Monthly Electricity Bill: ${this.electricityBill}` : ''}

${this.designation ? `Designation in Society: ${this.designation}` : ''}
    `;

    const gmailUrl =
      `https://mail.google.com/mail/u/0/?view=cm&fs=1` +
      `&to=${this.email}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, '_blank');
  }
}

handleSubmit(): void {
  if (
    this.fullName &&
    this.societyName &&
    this.pinCode &&
    this.whatsappNumber
  ) {
    this.saveToGoogleSheet();
    this.sendEmail();

    this.submitted = true;

    this.resetForm();

    setTimeout(() => {
      this.submitted = false;
    }, 3000);
  }
}

resetForm(): void {
  this.fullName = '';
  this.societyName = '';
  this.pinCode = '';
  this.whatsappNumber = '';
  this.agmApprovalStatus = '';
  this.electricityBill = '';
  this.designation = '';
}

saveToGoogleSheet(): void {

  const payload = {

    secret: 'SION_SOLAR_2026',

    fullName: this.fullName,
    societyName: this.societyName,
    pinCode: this.pinCode,
    whatsappNumber: this.whatsappNumber,
    agmApprovalStatus: this.agmApprovalStatus,
    electricityBill: this.electricityBill,
    designation: this.designation

  };

  fetch(this.googleScriptURL, {

    method: 'POST',

    mode: 'no-cors',

    headers: {
      'Content-Type': 'text/plain'
    },

    body: JSON.stringify(payload)

  })
  .then(() => {

    console.log('Saved to Google Sheet');

  })
  .catch((error) => {

    console.error('Google Sheet Error', error);

  });

}
 

}
