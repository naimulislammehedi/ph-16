const mobile = {
    brand: 'Apple',
    price: 999,
    color: 'Space Gray',
    camera: '12MP',
    isNew: true, 
}

for (const prop in mobile) {
    console.log(prop); 
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile); 
console.log(keys); 

for (const key of keys) {
    console.log(key, ": ", mobile[key]); 
}