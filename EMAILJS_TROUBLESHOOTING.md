# EmailJS Troubleshooting Guide

## Error: "Service ID not found"

This error means EmailJS cannot find the service with ID `service_92tjyac` in your account.

### Step 1: Verify Service Exists in EmailJS Dashboard

1. Go to https://dashboard.emailjs.com/admin
2. Click on **"Email Services"** in the left sidebar
3. Check if you have a service with ID `service_92tjyac`
4. If the service doesn't exist or has a different ID:
   - Note the correct Service ID
   - Update your `.env` file with the correct Service ID

### Step 2: Verify Service is Connected

1. In EmailJS dashboard → **Email Services**
2. Click on your service
3. Make sure it shows as **"Connected"** or **"Active"**
4. If it's not connected:
   - Click **"Connect Account"** or **"Reconnect"**
   - Follow the authorization steps
   - Make sure the connection is successful

### Step 3: Check Service ID Format

The Service ID should:
- Start with `service_`
- Be exactly as shown in the EmailJS dashboard
- Have no extra spaces or characters

Your current Service ID: `service_92tjyac`

### Step 4: Verify Template ID

1. Go to **Email Templates** in EmailJS dashboard
2. Check if template `template_zzfus5g` exists
3. Verify the template has these variables:
   - `{{to_email}}`
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{company}}`
   - `{{message}}`
   - `{{reply_to}}`

### Step 5: Restart Development Server

After updating `.env` file, you MUST restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
yarn start
```

**Important:** Environment variables are only loaded when the server starts. Changes to `.env` won't take effect until you restart.

### Step 6: Verify Environment Variables are Loaded

1. Open browser console (F12)
2. Submit the form
3. Check the console logs - you should see:
   ```
   EmailJS Config: {
     publicKey: 'Set',
     serviceId: 'service_92tjyac',
     templateId: 'template_zzfus5g'
   }
   ```

If you see `'YOUR_SERVICE_ID'` instead, the environment variables aren't loading.

### Step 7: Common Issues

**Issue: Service ID is correct but still not found**
- Solution: The service might be deleted or deactivated. Create a new service in EmailJS dashboard.

**Issue: Service exists but shows as disconnected**
- Solution: Reconnect the service in EmailJS dashboard → Email Services → Your Service → Connect/Reconnect

**Issue: Template variables don't match**
- Solution: Make sure your template uses the exact variable names: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{message}}`, `{{reply_to}}`

### Step 8: Create New Service (If Needed)

If your service doesn't exist:

1. Go to EmailJS dashboard → **Email Services**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail recommended)
4. Click **"Connect Account"** and authorize
5. Copy the new **Service ID** (starts with `service_`)
6. Update your `.env` file:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_new_service_id_here
   ```
7. Restart your development server

### Step 9: Test with EmailJS Dashboard

1. Go to EmailJS dashboard → **Email Templates**
2. Click on your template
3. Click **"Test"** button
4. Fill in test values and send
5. If this works, the issue is with your code configuration
6. If this doesn't work, the issue is with your EmailJS setup

## Quick Checklist

- [ ] Service ID exists in EmailJS dashboard
- [ ] Service is connected/active
- [ ] Service ID in `.env` matches dashboard exactly
- [ ] Template ID exists and has correct variables
- [ ] Development server was restarted after updating `.env`
- [ ] Environment variables are loading (check console logs)

## Still Not Working?

1. Double-check all IDs in EmailJS dashboard
2. Create a fresh service and template
3. Update `.env` with new IDs
4. Restart development server
5. Test again

