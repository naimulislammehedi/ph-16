const sentence = "Hello, World!";

let reversed = "";
for (const letter of sentence) {
    // console.log(letter);
    reversed = letter + reversed; 
}

console.log(reversed);

let reversed2 = "";
for (let i = 0; i < sentence.length; i++) {
    // console.log(i); 
    const letter = sentence[i];
    reversed2 = letter + reversed2;
}
console.log(reversed2);

// shortcut 
const reverse3 = sentence.split("").reverse().join(''); 
console.log(reverse3);