// Confirming that JavaScript file is connected to HTML file
console.log("Hello!");
console.log("======================================");

// Empty array to store factors from prime number check
let primeArr = []

// Selecting DOM elements to dynamically render content
const ansEl = document.querySelector("#answer");
const multiplyBtn = document.querySelector("#multiplyBtn");
const fizzBuzzUl = document.querySelector("#fizzbuzz");
const primeBtn = document.querySelector("#primeBtn");
const primeAnswer = document.querySelector("#primeAnswer");

// Function that multiplies two arguments or paramaterss
const multiply = (a, b) => {
    return a * b;
}

// Confirming that multiplication function is working correctly
console.log("Testing multiplication function:");
console.log(`Expected to be 147: ${multiply(3, 49)}`);
console.log("======================================");

// preventDefault to prevent page from refreshing when button is clicked
// Taking in user input from html page, plugging that into our multiplication function, and dynamically rendering the answer to the page.
const handleAnswerDisplay = (e) => {
    e.preventDefault();
    const numEl1 = document.querySelector("#numEl1").value;
    const numEl2 = document.querySelector("#numEl2").value;
    if (numEl1 === "" || numEl2 === "") {
        alert("You must enter two numbers to multiply")
    } else {
        console.log(`${numEl1} x ${numEl2} = ${multiply(numEl1, numEl2)}`);
        ansEl.textContent = `= ${multiply(numEl1, numEl2)}`;
    }
}

// Method that runs our dynamic rendering function when button is clicked.
multiplyBtn.addEventListener("click", handleAnswerDisplay);

// Fizzbuzz challenge solution from scratch with no help!
// Dynamic rendering and styling
console.log("Testing my fizzbuzz solution:");

const fizzBuzz = () => {
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
}

fizzBuzz();
console.log("======================================");

// Testing to confirm array is empty
console.log("Confirming array is empty");
console.log("Expected to be empty array:");
console.log(primeArr);
console.log("======================================");

// We will use this function to check if a number from user input is prime later and be able to display its factors
const handleFactors = (num) => {
    primeArr = []
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primeArr.push(i)
            continue
        }
    }
}

// Testing the handleFactors function
handleFactors(21);
console.log("Testing function that shows factors of number from user input:");
console.log(`Expected to be 3,7: ${primeArr}`);
console.log("======================================");

// Checks if number from user input is prime. I came up with this solution from scratch with no google help!
const handlePrimeCheck = (n) => {
    handleFactors(n);
    if (n <= 1) {
        return false
    } else if (n == 2) {
        return true
    } else if (primeArr.length > 0) {
        return false
    } else {
        return true
    }
}

// Testing if prime number check function is accurate
console.log("Testing if prime number check function is accurate:");
console.log(`Expected to be false: ${handlePrimeCheck(-13)}`);
console.log(`Expected to be false: ${handlePrimeCheck(1)}`);
console.log(`Expected to be true: ${handlePrimeCheck(2)}`);
console.log(`Expected to be true: ${handlePrimeCheck(7)}`);
console.log(`Expected to be false: ${handlePrimeCheck(8)}`);
console.log(`Expected to be true: ${handlePrimeCheck(13)}`);
console.log(`Expected to be false: ${handlePrimeCheck(21)}`);
console.log(`Expected to be false: ${handlePrimeCheck(55)}`);
console.log("======================================");

// Displaying prime number results based on user input as well as its factors if any
const handlePrimeDisplay = (e) => {
    e.preventDefault();
    const primeInput = document.querySelector("#primeInput").value;
    if (primeInput === "") {
        alert("You must enter a number")
    } else if (handlePrimeCheck(primeInput) === false) {
        // Convert array into string with spaces for DOM
        const primeArrStr = primeArr.join(", ")
        console.log(`${primeInput} is not a prime number. ${primeArrStr.length > 0 ? (`Factors: ${primeArrStr}`) : ``}`);
        primeAnswer.textContent = `False, because it is either a number less than 2 or has multiple factors. ${primeArr.length > 0 ? (`(${primeArrStr})`) : ``}`;
    } else {
        console.log(`${primeInput} is a prime number.`);
        primeAnswer.textContent = "True, because it is a number greater than 1 that only has two factors: 1 and itself!";
    }
}

// Method that runs our dynamic rendering function when button is clicked.
primeBtn.addEventListener("click", handlePrimeDisplay);