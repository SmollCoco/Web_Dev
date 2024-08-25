const clock = document.getElementById("clock");

function zeroPad(int, n) {
    return int.toString().padStart(n, "0");
}
function change() {
    date = new Date();
    clock.textContent = `${zeroPad(date.getHours(), 2)}:${zeroPad(
        date.getMinutes(),
        2
    )}:${zeroPad(date.getSeconds(), 2)}`;
}

update();
setInterval(update, 1000);
