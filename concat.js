const first = "Hello, ";
const second = "world!";

console.log(first + second);

const fullSentence = first.concat(second); 
console.log(fullSentence);

const name = "Alice";
const greeting = "Hello, ".concat(name, "!"); 
console.log(greeting);

console.log(greeting.includes("Alice"));
console.log(greeting.includes("Bob"));