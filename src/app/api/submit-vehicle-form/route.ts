import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { vin, kilometers, name, vehicleDetails, phone, email, promoCode } = data;
    
    if (!email || !vin || !vehicleDetails) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if Google Sheets environment variables are configured
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_VEHICLE_SPREADSHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId || 
        clientEmail.includes('your-service-account') || 
        privateKey.includes('REPLACE_WITH_YOUR_ACTUAL_PRIVATE_KEY') ||
        spreadsheetId.includes('your_vehicle_spreadsheet_id')) {
      
      // Log the form data for development purposes
      console.log('Google Sheets not configured. Vehicle form data:', { 
        timestamp: new Date().toISOString(), 
        vin, 
        kilometers, 
        name, 
        vehicleDetails, 
        phone, 
        email, 
        promoCode 
      });
      
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted! (Google Sheets integration not configured - check FORM_SETUP_INSTRUCTIONS.md)' 
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
      vin || '',
      kilometers || '',
      name || '',
      vehicleDetails || '',
      phone || '',
      email || '',
      promoCode || ''
    ];

    // Insert data into Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:H', // Using the default sheet name
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    // Email functionality removed for now - data is saved to Google Sheets
    console.log('Vehicle form data saved to Google Sheets:', { timestamp, vin, vehicleDetails, name, email });

    return NextResponse.json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting vehicle form:', error);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
