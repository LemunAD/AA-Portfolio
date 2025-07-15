# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your work email
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   ```
   Subject: New Contact Form Message: {{subject}}
   
   From: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Set the "To Email" to your work email address
5. Copy the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key**

## Step 5: Update Your .env File
Open the `.env` file in your project root and replace the placeholder values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## Step 6: Test Your Form
1. Restart your development server: `npm start`
2. Navigate to your contact page
3. Fill out and submit the form
4. Check your work email for the message

## Troubleshooting
- Make sure all environment variables are correctly set
- Restart your dev server after changing .env file
- Check EmailJS dashboard for any error logs
- Verify your email service is properly connected

## Security Notes
- Never commit your .env file to version control
- The .env file is already added to .gitignore
- Your EmailJS credentials are kept secure in environment variables
