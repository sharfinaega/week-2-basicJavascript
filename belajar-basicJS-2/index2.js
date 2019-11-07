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

// 3.
const user = prompt("Who's there?");

if (user == "cancel") {
  alert("canceled");
} else if (user == "other") {
  alert("I dont know you");
} else if (user == "admin") {
  const password = prompt("Password?");

  if (password == "cancel") {
    alert("Canceled");
  } else if (password == "other") {
    alert("Wrong password");
  } else if (password == "TheMaster") {
    alert("Welcome");
  }
} else {
  alert("apakah anda alien?");
}
