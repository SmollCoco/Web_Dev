const time = document.getElementById("time");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

function zeroPad(int, n) {
    return String(int).padStart(n, "0");
}

function updateTime() {
    const curr = new Date(currTime);

    const hours = zeroPad(curr.getHours(), 2);
    const mins = zeroPad(curr.getMinutes(), 2);
    const secs = zeroPad(curr.getSeconds(), 2);
    const millisecs = zeroPad(curr.getMilliseconds() / 10, 2);

    time.textContent = `${hours}:${mins}:${secs}:${millisecs}`;

    currTime += 10;
}

function startTime() {
    if (!running) {
        running = true;
        timer = setInterval(updateTime, 10);
    }
}
function pauseTime() {
    running = false;
    clearInterval(timer);
}
function resetTime() {
    running = false;
    clearInterval(timer);
    currTime = 0;
    time.textContent = "00:00:00:00";
}

let currTime = 0;
let running = false;
let timer = null;
start.onclick = startTime;
pause.onclick = pauseTime;
reset.onclick = resetTime;
