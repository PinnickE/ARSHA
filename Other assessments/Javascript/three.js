// Reversing numbers
function reverseNumber(x) {
    let reversal = Number(x.toString().split("").reverse().join(""));
    console.log(reversal)
}

reverseNumber(32243);

// First Letter to Uppercase

function upperLetter(x) {
    let original = x.split(" ");

    let newOne = [];

    for (let count = 0; count < original.length; count++) {
        newOne.push(original[count].charAt(0).toUpperCase() + original[count].slice(1))
    }
    let printOut = newOne.join(" ");
    console.log(printOut);
}

upperLetter("the quick brown fox");

// Count letter

// Largest number
let a = -5, b = -2, c = 6, d = 0, e = -1;

if ((a > b) && (a > c) && (a > d) && (a > e)) {
  console.log(a);
} else if ((b > a) && (b > c) && (b > d) && (b > e)) {
  console.log(b);
} else if ((c > a) && (c > b) && (c > d) && (c > e)) {
  console.log(c);
} else if ((d > a) && (d > b) && (d > c) && (d > e)) {
  console.log(d);
} else {
  console.log(e);
}