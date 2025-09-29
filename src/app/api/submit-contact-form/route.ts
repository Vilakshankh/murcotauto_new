import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { email, name, message } = data;
    
    if (!email || !name || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Check if Google Sheets environment variables are configured
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_CONTACT_SPREADSHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId || 
        clientEmail.includes('your-service-account') || 
        privateKey.includes('REPLACE_WITH_YOUR_ACTUAL_PRIVATE_KEY') ||
        spreadsheetId.includes('your_contact_spreadsheet_id')) {
      
      // Log the form data for development purposes
      console.log('Google Sheets not configured. Form data:', { 
        timestamp: new Date().toISOString(), 
        name, 
        email, 
        message 
      });
      
      return NextResponse.json({ 
        success: true, 
        message: 'Message received! (Google Sheets integration not configured - check FORM_SETUP_INSTRUCTIONS.md)' 
      });
    }

    // Set up Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const rowData = [
      timestamp,
      email || '',
      name || '',
      message || ''
    ];

    // Insert data into Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:D', // Using the default sheet name
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    // Email functionality removed for now - data is saved to Google Sheets
    console.log('Contact form data saved to Google Sheets:', { timestamp, name, email, message });

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
