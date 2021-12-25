// Confirming that JavaScript file is connected to HTML file
console.log("Hello!");

// Selecting HTML elements to dynamically render content
const ansEl = document.querySelector("#answer");
const multiplyBtn = document.querySelector("#multiplyBtn");
const fizzBuzzUl = document.querySelector("#fizzbuzz")

// Function that multiplies two arguments or paramaters
function multiply(a, b) {
    return a * b;
}

// Confirming that multiplication function is working correctly
console.log(`Testing multiplication function: ` + multiply(2, 4));

// preventDefault to prevent page from refreshing when button is clicked
// Taking in user input from html page, plugging that into our multiplication function, and dynamically rendering the answer to the page.
function handleAnswerDisplay(e) {
    e.preventDefault();
    const numEl1 = document.querySelector("#numEl1").value;
    const numEl2 = document.querySelector("#numEl2").value;
    console.log(multiply(numEl1, numEl2));
    ansEl.textContent = `= ${multiply(numEl1, numEl2)}`;
}

// Method that runs our dynamic rendering function when button is clicked.
multiplyBtn.addEventListener("click", handleAnswerDisplay);

// Fizzbuzz challenge solution from scratch with no help!
console.log("My fizzbuzz solution");
for (let i = 1; i < 100; i++) {
    if (i % 15 === 0) {
        console.log("fizzbuzz");
        const fizzbuzzEl = document.createElement("li")
        fizzbuzzEl.textContent = "fizzbuzz"
        fizzBuzzUl.append(fizzbuzzEl)
    } else if (i % 5 === 0) {
        console.log("buzz");
        const buzzEl = document.createElement("li")
        buzzEl.textContent = "buzz"
        fizzBuzzUl.append(buzzEl)
    } else if (i % 3 === 0) {
        console.log("fizz");
        const fizzEl = document.createElement("li")
        fizzEl.textContent = "fizz"
        fizzBuzzUl.append(fizzEl)
    } else {
        console.log(i);
        const numEl = document.createElement("li")
        numEl.textContent = i
        fizzBuzzUl.append(numEl)
    }
}

