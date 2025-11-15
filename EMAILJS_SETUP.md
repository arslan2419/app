# EmailJS Setup Guide

This guide will help you set up EmailJS to receive form submissions via email.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
You have received a new message from your website contact form.

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** > **General** in your EmailJS dashboard
2. Find your **Public Key** under API Keys
3. **Copy the Public Key** (you'll need this later)

## Step 5: Configure Your Environment Variables

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your EmailJS credentials:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Replace the placeholder values with your actual credentials from steps 2-4

## Step 6: Restart Your Development Server

After adding the environment variables, restart your development server:

```bash
yarn start
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox (arslanmukhtar.dev@gmail.com) for the form submission

## Troubleshooting

- **Form not sending**: Check that all environment variables are set correctly
- **Email not received**: Check your spam folder and verify your EmailJS service is connected
- **Error messages**: Check the browser console for detailed error messages

## Security Note

- Never commit your `.env` file to version control (it's already in `.gitignore`)
- The Public Key is safe to expose in frontend code
- Keep your Service ID and Template ID private in production

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

