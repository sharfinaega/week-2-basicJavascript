// 1. Odd & Even Number

const numbers = [21, 321, 341, 12, 31, 412, 12, 90, 10, 2];
let ganjil = [];
let genap = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    genap.push(numbers[i]);
  } else {
    ganjil.push(numbers[i]);
  }
}

let hasil_genap = genap[0];
let hasil_ganjil = ganjil[0];

console.log("ini odd number " + hasil_ganjil + ",");
console.log("ini even number " + hasil_genap + ",");

console.log("-------------------------------------------");

// 2. Guess Age
let guessAge = prompt("Guess, how old am i?");
const age = 26;

for (
  guessAge == age;
  guessAge != age;
  guessAge = prompt("Guess, how old am i?")
) {
  if (guessAge > age) {
    alert("nope, i'm younger than that");
  } else if (guessAge < age) {
    alert("nope, i'm older than that");
  }
}
alert("YES!! You're right!!");
