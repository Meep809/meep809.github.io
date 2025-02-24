document.addEventListener("DOMContentLoaded", function () {
    function formatTimeUnit(unit) {
        return unit < 10 ? '0' + unit : unit; // Ensures double digits
    }

    function updateClock() {
        const nowUTC = new Date();
        const nowLocal = new Date();

        // Get formatted time
        const utcHours = formatTimeUnit(nowUTC.getUTCHours());
        const utcMinutes = formatTimeUnit(nowUTC.getUTCMinutes());
        const utcSeconds = formatTimeUnit(nowUTC.getUTCSeconds());

        const localHours = formatTimeUnit(nowLocal.getHours());
        const localMinutes = formatTimeUnit(nowLocal.getMinutes());
        const localSeconds = formatTimeUnit(nowLocal.getSeconds());

        // Check if elements exist before updating
        if (document.getElementById('utc-hour')) {
            document.getElementById('utc-hour').innerText = utcHours;
            document.getElementById('utc-minute').innerText = utcMinutes;
            document.getElementById('utc-second').innerText = utcSeconds;
        }

        if (document.getElementById('local-hour')) {
            document.getElementById('local-hour').innerText = localHours;
            document.getElementById('local-minute').innerText = localMinutes;
            document.getElementById('local-second').innerText = localSeconds;
        }
    }

    updateClock(); // Initialize immediately
    setInterval(updateClock, 1000); // Update every second
});
