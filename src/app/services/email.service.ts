import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = 'service_4sewchd';
  private templateId = 'template_rt06ka8';
  private publicKey = 'QWlYlkFKIPqHLBQeU';

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
        to_email: 'stevekingoro@gmail.com'
      };

      const response = await emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );

      console.log('Email sent successfully:', response);
      return response;
    } catch (error) {
      console.error('Email sending failed:', error);
      throw error;
    }
  }
}