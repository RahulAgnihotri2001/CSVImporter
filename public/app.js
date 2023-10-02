// Function to import CSV data for selected columns
async function importCsv() {
    const selectedColumns = Array.from(document.getElementById('columns').selectedOptions, option => parseInt(option.value));
    const resultDiv = document.getElementById('result');

    if (selectedColumns.length === 0) {
        resultDiv.innerHTML = 'Please select at least one column.';
        return;
    }

    const csvFileInput = document.getElementById('csvFile');
    const csvFile = csvFileInput.files[0];

    if (!csvFile) {
        resultDiv.innerHTML = 'Please select a CSV file.';
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const csvText = e.target.result;
        const lines = csvText.split('\n');
        if (lines.length < 1) {
            resultDiv.innerHTML = 'The CSV file is empty.';
            return;
        }

        // Extract and serialize data from selected columns
        const data = [];
        lines.forEach((line) => {
            const columns = line.split(',');
            const rowData = selectedColumns.map((columnIndex) => columns[columnIndex]);
            data.push(rowData);
        });

        // Send the data to the backend as a CSV file
        sendCsvFileToBackend(data);
    };

    reader.readAsText(csvFile);
}

// Function to send a CSV file with selected columns to the backend
async function sendCsvFileToBackend(data) {
    try {
        // Create a new CSV file with only selected columns
        const selectedCsv = new Blob([data.map(row => row.join(',')).join('\n')], { type: 'text/csv' });

        // Create a FormData object to send the CSV file
        const formData = new FormData();
        formData.append('selectedCsv', selectedCsv);

        const response = await fetch('/import', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            resultDiv.innerHTML = 'CSV data imported successfully.';
        } else {
            resultDiv.innerHTML = 'Error importing CSV data.';
        }
    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = 'An error occurred while importing CSV data.';
    }
}

// Function to handle the CSV file selection
function handleFileSelect() {
    const csvFileInput = document.getElementById('csvFile');
    const selectedFile = csvFileInput.files[0];
    const resultDiv = document.getElementById('result');

    if (!selectedFile) {
        resultDiv.innerHTML = 'Please select a CSV file.';
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const csvText = e.target.result;
        const lines = csvText.split('\n');
        if (lines.length < 1) {
            resultDiv.innerHTML = 'The CSV file is empty.';
            return;
        }

        // Extract the headers (first row) and populate the columns dropdown
        const headers = lines[0].split(',');
        populateColumns(headers);
    };

    reader.readAsText(selectedFile);
}

// Function to populate the columns dropdown based on CSV headers
function populateColumns(headers) {
    const columnsSelect = document.getElementById('columns');
    columnsSelect.innerHTML = '';
    headers.forEach((header, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = header;
        columnsSelect.appendChild(option);
    });
}

// Attach the handleFileSelect function to the file input's change event
document.getElementById('csvFile').addEventListener('change', handleFileSelect);

// Attach the importCsv function to the "Import CSV" button click event
document.getElementById('importButton').addEventListener('click', importCsv);

