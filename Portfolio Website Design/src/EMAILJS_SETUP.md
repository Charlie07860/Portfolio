# EmailJS Setup Guide

To make your contact form fully functional, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. Go to Email Services in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (faizanstudent0@gmail.com)
5. Note down the **Service ID**

## 3. Create Email Template
1. Go to Email Templates in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Portfolio Contact from {{from_name}}

**Content:**
```
Hello Faizan,

You have received a new message from your portfolio website.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Note down the **Template ID**

## 4. Get Public Key
1. Go to Account settings
2. Find your **Public Key** (User ID)

## 5. Update Code
Replace the placeholder values in `/components/ContactSection.tsx`:

Find this section:
```typescript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  SERVICE_ID: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID  
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID' // Replace with your EmailJS template ID
};
```

Replace with your actual values:
```typescript
const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key_here',
  SERVICE_ID: 'your_actual_service_id_here',  
  TEMPLATE_ID: 'your_actual_template_id_here'
};
```

## 6. Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email (faizanstudent0@gmail.com) for the message

## Current Status ✅
**Your contact form is already working!** Even without EmailJS setup, it uses a fallback system that opens the user's email client with a pre-filled message.

## Fallback Option
- If EmailJS is not configured (current state), the form opens the user's email client
- If EmailJS fails after configuration, it automatically falls back to email client
- Users will always be able to contact you regardless of EmailJS status

## Schedule a Call Feature
The "Schedule a Call" button currently opens an email template. You can later integrate with:
- Calendly
- Google Calendar scheduling
- Microsoft Bookings
- Or any other scheduling service

## Free Tier Limits
EmailJS free tier allows:
- 200 emails per month
- 2 email services
- 1 email template

This should be sufficient for a portfolio website.