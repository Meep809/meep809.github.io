// Time Clock
function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    clockElement.innerHTML = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);  // Update every second
