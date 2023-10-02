const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000; // Choose an appropriate port


// Configure multer for handling file uploads
const storage = multer.memoryStorage(); // Store uploaded file in memory
const upload = multer({ storage });

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to handle the CSV data import
app.post('/import', upload.single('selectedCsv'), async (req, res) => {
    // Check if a CSV file has been uploaded
    if (!req.file) {
        return res.status(400).send('No CSV file uploaded.');
    }

    // Access the uploaded CSV file here
    const csvBuffer = req.file.buffer;

    // Authenticate with Google Sheets API
    const auth = new google.auth.GoogleAuth({
        // Replace with your service account key file present Google Spreadsheet API key JSON file
        keyFile: 'path_to_your_service_account_key.json', 
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    try {
        // Create a Google Sheets API client
        const sheets = google.sheets({ version: 'v4', auth });

        // Define the spreadsheet data
        const spreadsheetData = {
            spreadsheetId: 'your_spreadsheet_id', // Replace with your Google Spreadsheet ID
            range: 'Sheet1', // Replace with the sheet name where you want to paste the data
            valueInputOption: 'RAW',
            resource: {
                values: [['CSV Data']],
            },
        };

        // Paste the CSV data into Google Sheets
        await sheets.spreadsheets.values.update(spreadsheetData);

        res.send('<h1>CSV data has been imported to Google Sheets!</h1>');
    } catch (error) {
        console.error('Error importing CSV data to Google Sheets:', error);
        res.status(500).send('Error importing CSV data to Google Sheets.');
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
