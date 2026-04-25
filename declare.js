const pen = {
    brand: 'Parker',
    price: 10, 
    color: 'Blue',
}

const pencil = new Object(); 

console.log(pencil); 

const rubber = Object.create(pen); 
console.log(rubber);

// using class or function constructor
// using new keyword
// 