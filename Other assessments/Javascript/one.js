// Number vs 13

let num = prompt("What is your number?");

let result = num - 13;

if (num > 13) {
    result *= 2;
}

console.log(result);

// Sum of integers
let num_one = prompt("What is your first number?");
let num_two = prompt("What is your second number?");
let addUp;

if (Number.isInteger(num_one) === false) {
    console.log("First number is not an integer.")
}else if (Number.isInteger(num_two) === false) {
    console.log("Second number is not an integer.")
} else if (num_one == num_two) {
    addUp = num_one + num_two;
    console.log(addUp * 3);
}else {
    console.log(addUp);
}

// Py string
let originalString = "Python"; 
let newString;

if (originalString[0] === "P" && originalString[1] === "y") {
  console.log(originalString)
} else {
  newString = "Py" + originalString;
  console.log(newString);
}

// Multiples of 3 or 7
let num1 = 21;

if ((num1 % 3 === 0) && (num1 % 7 === 0)) {
  console.log("Number is a multiple of both 3 and 7.")
} else if ((num1 % 3 === 0)) {
  console.log("Number is a multiple of 3.")
} else if ((num1 % 7 === 0)) {
  console.log("Number is a multiple of 7.")
} else {
  console.log("Number is neither a multiple of 3 nor 7.")
}

// Count vowels 