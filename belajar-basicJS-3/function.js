// FUNCTION ARROW
const addMarks = (text, mark, times) => {
  let temp = text;
  for (var i = 0; i < times; i++) {
    temp = temp + mark;
  }
  console.log(temp);
};

addMarks("hello", "!", 2);
addMarks("How are you", "?", 1);

console.log("------------------------------------------------------------------");

// FUNCTION ARROW
const addTitle = (title, name) => {
  console.log(title + name);
};

addTitle("Mr.", "Obama"); //Mr. Obama
addTitle("Mrs.", "Victoria"); //Mrs. Victoria

console.log("------------------------------------------------------------------");

// FUNCTION ARROW
const names = ["Alpha Avalon", "Betty Brave", "Gamma Gacurio"];

const showNames = names => {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(`[${i + 1}] ${name}`);
  }
};

showNames(names);
// // // [1] Alpha Avalon
// // // [2] Betty Brave
// // // [3] Gamma Gacurio

console.log("------------------------------------------------------------");

const murid = ["Ega", "Latif", "Danny"];
function namaMurid(murid) {
  let hasil = "";
  for (var i = 0; i < murid.length; i++) {
    hasil = hasil + "[" + (i + 1) + "]" + " " + murid[i] + " " + "\n";
  }
  return hasil;
}

console.log(namaMurid(murid));
// [1] Ega
// [2] Latif
// [3] Danny

console.log("------------------------------------------------------------");

const heroName = ["Alpha Avalon", "Betty Brave", "Gamma Gacurio"];

function filterName(heroName) {
  let result = [];
  for (var i = 0; i < heroName.length; i++) {
    if (heroName[i].length >= 12) {
      result.push(heroName[i]);
    }
  }
  return result;
}

console.log(filterName(heroName));
// ["Alpha Avalon", "Gamma Gacurio"];

console.log("------------------------------------------------------------");

const myContacts = [
  {
    id: 1,
    name: "Alpha Avalon",
    phone: "+1 111 101010",
    email: "alpha@avalon.org",
    favorite: true,
    rating: 9,
    tags: ["popular", "cool"]
  },
  {
    id: 2,
    name: "Betty Brave",
    phone: "+62 812 242424",
    email: "betty@braverian.com"
  },
  {
    id: 3,
    name: "Gamma Gacurio",
    phone: "+63 813 363636",
    email: "gamma@gacurio.dev"
  }
];
function showContact(textSearch) {
  let result = [];
  myContacts.map(function(myContact) {
    for (let [key, value] of Object.entries(myContact)) {
      if (value === textSearch) {
        return result.push(myContact);
        // console.log(myContact);

        // return myContact;
      }
    }
  });
  return result;
}

console.log(showContact("+62 812 242424"));
// console.log(showContact(3));

// [1] Alpha Avalon (+1 111 101010) <alpha@avalon.org>
// [2] Betty Brave (+62 812 242424) <betty@braverian.com>
// [3] Gamma Gacurio (+63 813 363636) <gamma@gacurio.dev>

console.log("------------------------------------------------------------");

const showNameWithAge = (name = "Unknown", age = 0) => {
  const nameWithAge = `${name} is ${age} year(s) old`;

  return nameWithAge; // return the value to be used later
};

const alpha = showNameWithAge("Alpha", 11);
const betty = showNameWithAge("Betty", 42);
const gamma = showNameWithAge("Gamma", 30);

console.log(alpha);
console.log(betty);
console.log(gamma);
