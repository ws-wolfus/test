// Replace with your actual Sheet ID and API Key
const SHEET_ID = https://docs.google.com/spreadsheets/d/e/2PACX-1vRr4p2BxvpnRJoTNH8wVmxnFBfP9oaRU9OU6vvLHrouJrriFpIpBHXxZCfLUD55swfHnmylhKhXhNJO/pubhtml;
const API_KEY = AIzaSyDJAJC6KvIFU8ETm8xNcotqKzRcQkoEMmI;
const RANGE = 'Sheet1!A1:A'; // Adjust the range as needed

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
    const list = document.getElementById('data-list');
    data.forEach(row => {
        const listItem = document.createElement('li');
        listItem.textContent = row[0]; // Assuming a single column of data
        list.appendChild(listItem);
    });
}

// Fetch data when the page loads
window.onload = fetchData;
