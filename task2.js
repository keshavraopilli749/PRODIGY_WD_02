let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

// Function to start or pause the timer
function startPause() {
    const startPauseButton = document.getElementById('startPause');

    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
        startPauseButton.textContent = 'Start';
    } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTimer, 10);
        isRunning = true;
        startPauseButton.textContent = 'Pause';
    }
}

// Function to stop the timer completely
function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('startPause').textContent = 'Start';
}

// Function to update the timer display
function updateTimer() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);

    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');

    document.getElementById('timer').textContent = `${minutes}:${seconds}.${milliseconds}`;
}

// Function to reset the timer
function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('timer').textContent = '00:00:00.00';
    document.getElementById('startPause').textContent = 'Start';
    document.getElementById('laps').innerHTML = '';
}

// Function to record lap time
function recordLap() {
    if (isRunning) {
        const lapTime = document.getElementById('timer').textContent;
        const lapDiv = document.createElement('div');
        lapDiv.textContent = `Lap ${document.getElementById('laps').childElementCount + 1}: ${lapTime}`;
        document.getElementById('laps').appendChild(lapDiv);
    }
}
