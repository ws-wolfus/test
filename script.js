// Replace with your actual Sheet ID and API Key
const SHEET_ID = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRr4p2BxvpnRJoTNH8wVmxnFBfP9oaRU9OU6vvLHrouJrriFpIpBHXxZCfLUD55swfHnmylhKhXhNJO/pubhtml';
const API_KEY = 'AIzaSyDJAJC6KvIFU8ETm8xNcotqKzRcQkoEMmI';
const RANGE = 'Sheet1!A1:A1'; // Only fetching the first cell A1

// Function to fetch data from Google Sheets
async function fetchData() {
    try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`);
        const data = await response.json();
        displayData(data.values);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to display data on the webpage
function displayData(data) {
    if (data && data.length > 0) {
        const cellValue = data[0][0]; // Get the value of the first cell (A1)
        document.getElementById('data-display').textContent = cellValue;
    } else {
        document.getElementById('data-display').textContent = 'No data found';
    }
}

// Fetch data when the page loads
window.onload = fetchData;
