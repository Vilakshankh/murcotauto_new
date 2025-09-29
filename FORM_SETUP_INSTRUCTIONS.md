# Form Setup Instructions

This guide will help you set up Google Sheets integration and email functionality for your forms.

## Prerequisites

1. Google Account
2. Resend account (for email sending)

## Step 1: Set up Google Sheets

### 1.1 Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Create two sheets with the following names and headers:

**Sheet 1: "Vehicle_Submissions"**
Headers in row 1: `Timestamp | VIN | Kilometers | Name | Vehicle Details | Phone | Email | Promo Code`

**Sheet 2: "Contact_Submissions"**
Headers in row 1: `Timestamp | Email | Name | Message`

### 1.2 Get the Spreadsheet ID

From your Google Sheets URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
Copy the `SPREADSHEET_ID` part.

### 1.3 Set up Google Cloud Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API" and enable it
4. Create a service account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Give it a name and description
   - Click "Create and Continue"
   - Skip role assignment for now and click "Done"
5. Generate a key for the service account:
   - Click on your newly created service account
   - Go to the "Keys" tab
   - Click "Add Key" > "Create New Key"
   - Choose JSON format and download the file
6. Share your Google Sheet with the service account:
   - Open your Google Sheet
   - Click "Share" button
   - Add the service account email (from the JSON file) as an editor

## Step 2: Set up Email Service (Resend)

1. Sign up at [Resend](https://resend.com)
2. Verify your domain or use their testing domain
3. Create an API key from the dashboard
4. Note: For production, you'll need to verify your domain to send emails from it

## Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env.local` in your project root
2. Fill in the values:

```bash
# From your Google Sheets URL
GOOGLE_SHEETS_SPREADSHEET_ID=your_actual_spreadsheet_id

# From the downloaded JSON file
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_ACTUAL_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"

# From Resend dashboard
RESEND_API_KEY=re_your_actual_api_key

# Your business email
ADMIN_EMAIL=info@murcotauto.com
```

**Important Notes:**
- Keep the quotes around the private key
- The private key should include the `\n` characters as shown
- Never commit `.env.local` to version control

## Step 4: Update Email Domains

In the API route files, update the `from` email addresses:

- In `src/app/api/submit-vehicle-form/route.ts`
- In `src/app/api/submit-contact-form/route.ts`

Change `noreply@your-domain.com` to your actual verified domain.

## Step 5: Test the Forms

1. Start your development server: `npm run dev`
2. Fill out the forms on your website
3. Check that:
   - Data appears in your Google Sheets
   - You receive notification emails
   - Customers receive confirmation emails

## Troubleshooting

### Common Issues:

1. **"Unable to parse private key"**
   - Make sure the private key includes proper `\n` characters
   - Ensure it's wrapped in quotes in the .env.local file

2. **"Permission denied" for Google Sheets**
   - Make sure you shared the sheet with the service account email
   - Check that the service account has editor permissions

3. **Emails not sending**
   - Verify your domain with Resend
   - Check that your API key is correct
   - For testing, use Resend's testing domain

4. **"Spreadsheet not found"**
   - Double-check your spreadsheet ID
   - Make sure the sheet names match exactly: "Vehicle_Submissions" and "Contact_Submissions"

## Security Notes

- Never expose your private keys in client-side code
- Use `.env.local` for local development
- For production, set environment variables in your hosting platform
- Regularly rotate your API keys
- Consider rate limiting for production use

## Production Deployment

When deploying to production:

1. Set environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Update email domains to your production domain
3. Consider implementing additional security measures like CAPTCHA
4. Set up monitoring for form submissions
5. Implement proper error handling and logging
