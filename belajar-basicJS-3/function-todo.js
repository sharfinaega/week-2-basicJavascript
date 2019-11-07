const todos = ["Write the letter", "Eat some lunch", "Run around the city"];

function showTodos(data) {
  let temp = "";
  for (let i = 0; i < todos.length; i++) {
    temp = temp + "[" + (i + 1) + "] " + todos[i];
    temp = temp + "\n";
  }
  return temp;
}

console.log(showTodos(1));

console.log("----------------------------------------------------------------------------");

// search todo
const kegiatan = ["Write the letter", "Eat some lunch", "Run around the city"];

function searchTodos(textToSearch) {
  var result = [];
  for (let i = 0; i < kegiatan.length; i++) {
    if (kegiatan[i].toLowerCase().includes(textToSearch)) {
      result.push(kegiatan[i]);
    }
  }
  return result;
}

console.log(searchTodos("run"));
// ['Run around the city']
console.log(searchTodos("eat"));
// [ 'Eat some lunch' ]
console.log(searchTodos("the"));
// [ 'Write the letter', 'Run around the city' ]

console.log("----------------------------------------------------------------------------");

const myTodos = [
  {
    id: 1,
    text: "Write the letter",
    tags: ["important", "writing"],
    favorite: true,
    completed: true
  },
  {
    id: 2,
    text: "Eat some lunch",
    tags: ["food"],
    completed: false,
    favorite: true
  },
  {
    id: 3,
    text: "Run around the city",
    favorite: false,
    completed: true
  }
];

function daftarKegiatan(data) {
  let temp = "";
  for (let i = 0; i < myTodos.length; i++) {
    // temp = temp + myTodos[i].text;
    if (myTodos[i].completed === true) {
      temp = temp + "☑" + myTodos[i].text;
      if (myTodos[i].favorite === true) {
        temp = temp + "*" + "\n";
      }
    } else if (myTodos[i].completed === false) {
      temp = temp + "x" + myTodos[i].text;
      temp = temp + "\n";
      if (myTodos[i].favorite === false) {
        temp = temp + "*" + "\n";
      }
    }
  }
  return temp;
}

console.log(daftarKegiatan());

console.log("----------------------------------------------------------------------------");

const todoLists = [
  {
    id: 1,
    text: "Write the letter",
    tags: ["important", "writing"],
    favorite: true,
    completed: true
  },
  {
    id: 2,
    text: "Eat some lunch",
    tags: ["food"],
    completed: false,
    favorite: true
  },
  {
    id: 3,
    text: "Run around the city",
    favorite: false,
    completed: true
  }
];

function cariTodos(searchText) {
  let result = [];

  for (let i = 0; i < todoLists.length; i++) {
    if (todoLists[i].text.toLocaleLowerCase().includes(searchText)) {
      result.push(todoLists[i].text);
    }
  }
  return result;
}

console.log(cariTodos("the"));
