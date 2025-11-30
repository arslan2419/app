# EmailJS Quick Setup Guide

## Current Status
Your contact form is set up but **EmailJS credentials are not configured yet**. Follow these steps to enable email sending.

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (free account - 200 emails/month)
3. Verify your email

### Step 2: Add Email Service
1. In EmailJS dashboard → **Email Services**
2. Click **"Add New Service"**
3. Select **Gmail** (or your email provider)
4. Click **"Connect Account"** and authorize
5. **Copy the Service ID** (e.g., `service_xxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Use this template:

**Template Name:** Contact Form

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

3. Click **Save**
4. **Copy the Template ID** (e.g., `template_xxxxx`)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find **Public Key** under API Keys section
3. **Copy the Public Key** (e.g., `xxxxxxxxxxxxx`)

### Step 5: Add Credentials to .env File
Open your `.env` file and replace the placeholder values:

```env
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_actual_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
```

### Step 6: Restart Development Server
```bash
# Stop your current server (Ctrl+C)
# Then restart:
yarn start
```

### Step 7: Test the Form
1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox (arslanmukhtar.dev@gmail.com)

## Troubleshooting

**Form shows error?**
- Check browser console (F12) for error messages
- Verify all three credentials are in .env file
- Make sure you restarted the server after adding credentials

**Email not received?**
- Check spam folder
- Verify EmailJS service is connected in dashboard
- Check EmailJS dashboard → Logs for delivery status

**Still not working?**
- Verify credentials are correct (no extra spaces)
- Check that template variables match: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{message}}`, `{{reply_to}}`

