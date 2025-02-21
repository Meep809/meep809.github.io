// Function to format time with 2 digits (e.g., 01, 02, ..., 09)
function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    const hours = formatTimeUnit(now.getUTCHours());
    const minutes = formatTimeUnit(now.getUTCMinutes());
    const seconds = formatTimeUnit(now.getUTCSeconds());

    // Update the time in the footer
    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('second').innerText = seconds;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
