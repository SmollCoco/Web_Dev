const input = document.getElementById("input");
const button = document.getElementById("button");
const res = document.getElementById("res");
const images = document.getElementById("images");

button.onclick = function () {
    const val = input.value;
    const resArr = [];
    const imagesArr = [];

    for (let i = 0; i < val; ++i) {
        curr = Math.floor(Math.random() * 6) + 1;
        resArr.push(curr);
        imagesArr.push(
            `<img src="images/${curr}.png" alt="Dice face ${curr}" />`
        );
    }

    res.textContent = `Dice result: ${resArr.join(", ")}`;
    images.innerHTML = imagesArr.join(" ");
};
