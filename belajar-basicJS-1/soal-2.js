console.log(
  "-------------------------------------------------------------------------------------------------"
);

// 1

let nilai = 90;
let kkm = 70;

// write your code below

let hasil = "";

if (nilai > kkm) {
  hasil = "Selamat anda lulus..!!";
}

console.log("Nilai anda " + nilai + ", " + hasil);

console.log(
  "-------------------------------------------------------------------------------------------------"
);

// 2
let dollar = 14019.55; //rupiah
let poundsterling = 18137.08; //rupiah
let bitcoin = 128447883.2; // rupiah

// write your code below

let hasil_dollar = 5 * dollar;
let hasil_pound = 4 * poundsterling;
let hasil_bitcoin = 2 * bitcoin;

console.log("5 dollar = " + hasil_dollar);
console.log("5 poundsterling = " + hasil_dollar);
console.log("2 bitcoin = " + hasil_dollar);

console.log(
  "-------------------------------------------------------------------------------------------------"
);

// 3
let a = 20;
let b = a;

// write your code below

let hasil_a = a - 1;
let hasil_b = b + 1;

console.log("a = " + hasil_a);
console.log("b = " + hasil_b);

console.log(
  "-------------------------------------------------------------------------------------------------"
);

// 4
const karyawan = [
  {
    nama: "Alpha",
    divisi: "informasi"
  },

  {
    nama: "Beta",
    divisi: "keuangan"
  }
];

// write your code below

karyawan[0].status = "active";
console.log(karyawan[0]);
