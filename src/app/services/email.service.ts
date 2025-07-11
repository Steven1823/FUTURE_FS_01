
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
  private templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
  private publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

  constructor() {
    // Initialize EmailJS
    emailjs.init(this.publicKey);
  }

  async sendEmail(emailData: EmailData): Promise<any> {
    try {
      const templateParams = {
        from_name: emailData.name,
        from_email: emailData.email,
        subject: emailData.subject || 'Portfolio Contact Form',
        message: emailData.message,
        to_name: 'Steven Kingoro'
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
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    // Initialize EmailJS with public key
    emailjs.init(environment.emailjs.publicKey);
  }

  async sendEmail(formData: EmailData): Promise<void> {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Steven Kingoro'
      };

      const response = await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams
      );

      if (response.status !== 200) {
        throw new Error(`EmailJS failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }
}
