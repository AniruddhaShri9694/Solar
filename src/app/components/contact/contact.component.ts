import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

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

  private toastService = inject(ToastService);

  handleSubmit(): void {
    if (
      this.fullName &&
      this.societyName &&
      this.pinCode &&
      this.whatsappNumber
    ) {
      this.saveToGoogleSheet();

      // Show thank you toast
      this.toastService.show(
        'Thank you for the enquiry. Our team will contact you soon',
        'success',
        3000
      );

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
      this.toastService.show(
        'There was an error saving your information. Please try again.',
        'error',
        3000
      );
    });
  }
}
