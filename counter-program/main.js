const addButton = document.getElementById("addButton");
const subractButton = document.getElementById("subtractButton");
const resetButton = document.getElementById("resetButton");
const count = document.getElementById("count");

function main() {
    let countNum = Number(document.getElementById("count").innerHTML);

    addButton.addEventListener("click", function () {
        countNum++;
        count.innerHTML = countNum;
    });

    subractButton.addEventListener("click", function () {
        countNum--;
        count.innerHTML = countNum;
    });

    resetButton.addEventListener("click", function () {
        count.innerHTML = "0";
    });
}

main()