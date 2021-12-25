console.log("Hello!");

const ansEl = document.querySelector("#answer");
const multiplyBtn = document.querySelector("#multiplyBtn");

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 4));

function handleAnswerDisplay(e) {
    e.preventDefault();
    const numEl1 = document.querySelector("#numEl1").value;
    const numEl2 = document.querySelector("#numEl2").value;
    console.log(multiply(numEl1, numEl2));
    ansEl.textContent = `${multiply(numEl1, numEl2)}`;
}

multiplyBtn.addEventListener("click", handleAnswerDisplay);

