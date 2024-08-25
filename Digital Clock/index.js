const clock = document.getElementById("clock");
let date = new Date();

function zeroPad(int, n) {
    return String(int).padStart(n, "0");
}
function change() {
    date = new Date();
    clock.textContent = `${zeroPad(date.getHours(), 2)}:${zeroPad(
        date.getMinutes(),
        2
    )}:${zeroPad(date.getSeconds(), 2)}`;
}

change();
setInterval(change, 1000);
