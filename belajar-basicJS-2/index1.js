// Challenge Factorial
let bilangan = 4;
let result = 1;
for (let i = bilangan; i > 0; i--) {
  result = result * i;
}

console.log(result);

// Challenge Reverse
let name = "dimitri";
let temp = "";
for (let i = name.length - 1; i >= 0; i--) {
  temp = temp + name[i];
}
console.log(temp);
