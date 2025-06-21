# EmailJS Setup Instructions

To enable email functionality in your portfolio, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## 4. Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)

## 5. Update Your Code
Replace the placeholder values in these files:

### src/app/services/email.service.ts
```typescript
private serviceId = 'YOUR_SERVICE_ID'; // Replace with your Service ID
private templateId = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
private publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

### src/environments/environment.ts and environment.prod.ts
```typescript
emailjs: {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID', 
  publicKey: 'YOUR_PUBLIC_KEY'
}
```

## 6. Test Your Setup
1. Fill out the contact form on your portfolio
2. Check your email inbox for the message
3. If you don't receive it, check:
   - Your EmailJS dashboard for any errors
   - Your spam/junk folder
   - The browser console for error messages

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Security Note
Your EmailJS public key is safe to expose in frontend code - it's designed to be public. However, never expose your private key or email service credentials.

## Troubleshooting
- Make sure your email service is properly connected in EmailJS
- Verify your template variables match the ones used in the code
- Check the browser console for any JavaScript errors
- Ensure your domain is added to EmailJS allowed origins (if using a custom domain)