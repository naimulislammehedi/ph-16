const country = "Bangladesh";
const division = "Dhaka";
const district = "Gazipur";

// array is mutable in JavaScript, which means you can change the elements of an array after it has been created. You can add, remove, or modify elements in an array.
const numbers = [54, 65, 78, 98, 45, 32];
console.log(numbers);
console.log(numbers.length);
console.log(numbers[0]);
numbers[0] = 100;
console.log(numbers); 

// string is immutable in JavaScript, which means you cannot change individual characters of a string directly. When you try to assign a new value to a character in a string, it will not modify the original string. Instead, it will create a new string if you want to change it.
const capital = "Dhaka";
console.log(capital.length); 
console.log(capital[0]);
capital[0] = "F"; 
console.log(capital);
