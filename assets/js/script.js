// Confirming that JavaScript file is connected to HTML file
console.log("Hello!");

// Selecting HTML elements to dynamically render content
const ansEl = document.querySelector("#answer");
const multiplyBtn = document.querySelector("#multiplyBtn");
const fizzBuzzUl = document.querySelector("#fizzbuzz");
const primeBtn = document.querySelector("#primeBtn");
const primeAnswer = document.querySelector("#primeAnswer");
var primeArr = []


// Function that multiplies two arguments or paramaterss
function multiply(a, b) {
    return a * b;
}

// Confirming that multiplication function is working correctly
console.log(`Testing multiplication function (expected outcome is 8): ` + multiply(2, 4));

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
// Dynamic rendering and styling
console.log("Testing my fizzbuzz solution:");
for (let i = 1; i < 16; i++) {
    if (i % 15 === 0) {
        console.log("fizzbuzz");
        const fizzbuzzEl = document.createElement("li");
        fizzbuzzEl.textContent = "fizzbuzz";
        fizzBuzzUl.append(fizzbuzzEl);
        fizzbuzzEl.setAttribute("style", "color:red; font-weight:bold");
    } else if (i % 5 === 0) {
        console.log("buzz");
        const buzzEl = document.createElement("li");
        buzzEl.textContent = "buzz";
        fizzBuzzUl.append(buzzEl);
        buzzEl.setAttribute("style", "color:blue; font-weight:bold");
    } else if (i % 3 === 0) {
        console.log("fizz");
        const fizzEl = document.createElement("li");
        fizzEl.textContent = "fizz";
        fizzBuzzUl.append(fizzEl);
        fizzEl.setAttribute("style", "color:green; font-weight:bold");
    } else {
        console.log(i);
        const numEl = document.createElement("li");
        numEl.textContent = i;
        fizzBuzzUl.append(numEl);
    }
}

console.log(primeArr);

function handleFactors(num) {
    primeArr = []
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(i);
            primeArr.push(i)
            continue
        }
    }
}

handleFactors(21);
console.log(primeArr);

function handlePrimeCheck(n) {
    handleFactors(n);
    if (n <= 1) {
        return false
    } else if (n == 2) {
        return true
    } else if (primeArr.length > 0) {
        return false
    }
}

// Testing if prime number check function is accurate
console.log("Testing if prime number check function is accurate:");
console.log(`Expected to be false: ` + handlePrimeCheck(-1));
console.log(`Expected to be false: ` + handlePrimeCheck(1));
console.log(`Expected to be true: ` + handlePrimeCheck(2));
console.log(`Expected to be true: ` + handlePrimeCheck(7));
console.log(`Expected to be false: ` + handlePrimeCheck(8));
console.log(`Expected to be true: ` + handlePrimeCheck(13));
console.log(`Expected to be false: ` + handlePrimeCheck(21));
console.log(`Expected to be false: ` + handlePrimeCheck(55));

// Displaying prime number results based on user input
function handlePrimeDisplay(e) {
    e.preventDefault();
    const primeInput = document.querySelector("#primeInput").value;
    if (handlePrimeCheck(primeInput) === false) {
        console.log(`Is prime: ` + false);
        primeAnswer.textContent = `False, because it is either a number less than 2 or has multiple factors.
        ${primeArr.length > 0 ? "(" + primeArr + ")" : ""}`;
    } else {
        console.log(`Is prime: ` + true);
        primeAnswer.textContent = "True, because it is a number greater than 1 that only has two factors: 1 and itself!";
    }
}

// Method that runs our dynamic rendering function when button is clicked.
primeBtn.addEventListener("click", handlePrimeDisplay);