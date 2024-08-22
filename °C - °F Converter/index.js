const input = document.getElementById("temp-input");
const button1 = document.getElementById("c-to-f");
const button2 = document.getElementById("f-to-c");
const res = document.getElementById("res");

button1.onclick = function () {
    if (input.value)
        res.textContent = Number(input.value) * 9 / 5 + 32;
    input.value = null;
};
button2.onclick = function () {
    if (input.value)
        res.textContent = (Number(input.value) - 32) * 5 / 9;
    input.value = null;
};
