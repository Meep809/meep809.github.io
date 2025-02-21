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

    // Use alerts to debug
    alert(`UTC Time: ${utcHours}:${utcMinutes}:${utcSeconds}`);
    alert(`Local Time: ${localHours}:${localMinutes}:${localSeconds}`);

    // Update both UTC and Local clocks
    updateDigit('utc-hour', utcHours);
    updateDigit('utc-minute', utcMinutes);
    updateDigit('utc-second', utcSeconds);

    updateDigit('local-hour', localHours);
    updateDigit('local-minute', localMinutes);
    updateDigit('local-second', localSeconds);
}
