const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'traveling', 'cooking'],
    isStudent: false,
} 

console.log(person.name); // John


// bracket notation
console.log(person['age']); // 30
const age = person['age'];
console.log(age); // 30

console.log(person.hobbies[1]); // traveling
