document.addEventListener("DOMContentLoaded", function () {
    function formatTimeUnit(unit) {
        return unit < 10 ? '0' + unit : unit; // Ensures double digits
    }

    function updateClock() {
        const nowUTC = new Date();
        const nowLocal = new Date();

        // Get formatted UTC time (24-hour format)
        const utcHours = formatTimeUnit(nowUTC.getUTCHours());
        const utcMinutes = formatTimeUnit(nowUTC.getUTCMinutes());
        const utcSeconds = formatTimeUnit(nowUTC.getUTCSeconds());

        // Get Local time in 12-hour format
        let localHours = nowLocal.getHours();
        const localMinutes = formatTimeUnit(nowLocal.getMinutes());
        const localSeconds = formatTimeUnit(nowLocal.getSeconds());
        const amPm = localHours >= 12 ? "PM" : "AM"; // Determine AM/PM

        // Convert to 12-hour format
        localHours = localHours % 12 || 12; // 0 -> 12, 13 -> 1

        // Ensure the elements exist before updating them
        if (document.getElementById('utc-hour')) {
            document.getElementById('utc-hour').innerText = utcHours;
            document.getElementById('utc-minute').innerText = utcMinutes;
            document.getElementById('utc-second').innerText = utcSeconds;
        }

        if (document.getElementById('local-hour')) {
            document.getElementById('local-hour').innerText = formatTimeUnit(localHours);
            document.getElementById('local-minute').innerText = localMinutes;
            document.getElementById('local-second').innerText = localSeconds;
            document.getElementById('local-ampm').innerText = amPm; // Show AM/PM
        }
    }

    updateClock(); // Initialize immediately
    setInterval(updateClock, 1000); // Update every second
});
