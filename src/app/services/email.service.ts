import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = 'YOUR_SERVICE_ID'; // You'll need to replace this
  private templateId = 'YOUR_TEMPLATE_ID'; // You'll need to replace this
  private publicKey = 'YOUR_PUBLIC_KEY'; // You'll need to replace this

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.publicKey);
  }

  async sendEmail(formData: any): Promise<any> {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Message',
        message: formData.message,
        to_email: 'stevekingoro@gmail.com' // Your email
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      return response;
    } catch (error) {
      throw error;
    }
  }
}