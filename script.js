// script.js

// Function to display current date and time in the specified format
function displayCurrentDateTime() {
    let now = new Date();
    let year = now.getUTCFullYear();
    let month = String(now.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    let day = String(now.getUTCDate()).padStart(2, '0');
    let hours = String(now.getUTCHours()).padStart(2, '0');
    let minutes = String(now.getUTCMinutes()).padStart(2, '0');
    let seconds = String(now.getUTCSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Display the current date and time
console.log(displayCurrentDateTime());