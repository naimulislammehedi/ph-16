const person = {
    name: 'John',
    age: 30,
    city: 'New York',
    hobbies: ['reading', 'traveling', 'cooking'],
    isStudent: false,
    salary: 50000,
} 

// value 
console.log(person); 

person.salary = 60000;
console.log(person); 

person['age'] = 31;
console.log(person);

person['fav places'] = ['maldives', 'bali', 'hawaii'];
console.log(person);

const cityName = 'city';
person[cityName] = 'Los Angeles';
console.log(person);