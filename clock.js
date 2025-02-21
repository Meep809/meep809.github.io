// Function to format time with 2 digits (e.g., 01, 02, ..., 09)
function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Function to update the clock every second
function updateClock() {
    const nowUTC = new Date();
    const nowLocal = new Date();

    // Get UTC time
    const utcHours = formatTimeUnit(nowUTC.getUTCHours());
    const utcMinutes = formatTimeUnit(nowUTC.getUTCMinutes());
    const utcSeconds = formatTimeUnit(nowUTC.getUTCSeconds());

    // Get Local time
    const localHours = formatTimeUnit(nowLocal.getHours());
    const localMinutes = formatTimeUnit(nowLocal.getMinutes());
    const localSeconds = formatTimeUnit(nowLocal.getSeconds());

    // Update both UTC and Local clocks
    updateDigit('utc-hour', utcHours);
    updateDigit('utc-minute', utcMinutes);
    updateDigit('utc-second', utcSeconds);

    updateDigit('local-hour', localHours);
    updateDigit('local-minute', localMinutes);
    updateDigit('local-second', localSeconds);
}

// Function to initialize clocks with default values
function initializeClock() {
    // Set initial values for both UTC and Local clocks
    const nowUTC = new Date();
    const nowLocal = new Date();

    const utcHours = formatTimeUnit(nowUTC.getUTCHours());
    const utcMinutes = formatTimeUnit(nowUTC.getUTCMinutes());
    const utcSeconds = formatTimeUnit(nowUTC.getUTCSeconds());

    const localHours = formatTimeUnit(nowLocal.getHours());
    const localMinutes = formatTimeUnit(nowLocal.getMinutes());
    const localSeconds = formatTimeUnit(nowLocal.getSeconds());

    // Set initial values for each clock
    document.getElementById('utc-hour').innerText = utcHours;
    document.getElementById('utc-minute').innerText = utcMinutes;
    document.getElementById('utc-second').innerText = utcSeconds;

    document.getElementById('local-hour').innerText = localHours;
    document.getElementById('local-minute').innerText = localMinutes;
    document.getElementById('local-second').innerText = localSeconds;
}

// Function to update a digit (flipping animation)
function updateDigit(id, newTimeUnit) {
    const digitElement = document.getElementById(id);
    const currentUnit = digitElement.innerText;

    if (currentUnit !== newTimeUnit) {
        const topSpan = document.createElement('span');
        const bottomSpan = document.createElement('span');

        topSpan.className = 'top';
        bottomSpan.className = 'bottom';

        topSpan.innerText = currentUnit;
        bottomSpan.innerText = newTimeUnit;

        digitElement.innerHTML = ''; // Clear previous content
        digitElement.appendChild(topSpan);
        digitElement.appendChild(bottomSpan);

        // Trigger flip animation
        setTimeout(() => {
            digitElement.classList.add('flip');
        }, 100); // Delay the class addition to allow animation to trigger

        setTimeout(() => {
            digitElement.classList.remove('flip');
        }, 400); // Remove flip class after animation is complete
    }
}

// Update the clocks every second
setInterval(updateClock, 1000);

// Initialize clocks immediately on page load
initializeClock();
