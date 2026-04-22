function greet(name, callback) {
  callback(`Hello, ${name}!`);
}

greet("Ankita", (message) => console.log(message));
