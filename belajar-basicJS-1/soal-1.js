const biodata = {
  name: "Laila Ali",
  age: 20,
  collage: "University of Indonesia",
  hobbies: [
    "swimming",
    "running",
    ["hiking", ["shopping", "traveling"]],
    "sleeping"
  ],
  address: {
    street: "Kemang Raya",
    province: "Jakarta Selatan",
    country: "Indonesia"
  },
  contact: {
    email: "laila@ali.com",
    phone: {
      countryCode: "021",
      number: [13123, 7968]
    }
  },
  skills: {
    language: ["English", "French", "Indonesia"],
    programming: [
      { language: "JavaScript", framework: "React.js" },
      "Java",
      "C++"
    ]
  }
};

let nomor = [biodata.contact.phone.number[0].toString()];
let nomor1 = [biodata.contact.phone.number[1].toString()];

console.log(
  "Hai, my name is " + biodata.name + ", I studied in " + biodata.collage + "."
);
console.log(
  "My programming skills are " +
    biodata.skills.programming[0].language +
    " including using its framework " +
    biodata.skills.programming[0].framework +
    " " +
    biodata.skills.programming[1] +
    " " +
    biodata.skills.programming[2] +
    "."
);
console.log(
  "During school, I complete in many sports including " +
    biodata.hobbies[2][0] +
    " and " +
    biodata.hobbies[1] +
    "."
);
console.log(
  "My hobbies are " +
    biodata.hobbies[3] +
    " and also " +
    biodata.hobbies[2][0] +
    "."
);
console.log(
  "Right now I live at " +
    biodata.address.street +
    ", " +
    biodata.address.province +
    " - " +
    biodata.address.country +
    "."
);
console.log(
  "You can reach me on my email " +
    biodata.contact.email +
    " or " +
    "my phone number " +
    biodata.contact.phone.countryCode +
    " - " +
    nomor +
    nomor1 +
    "."
);
console.log("Thank you and have a nice day.");
