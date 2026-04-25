const school = "Hogwarts School of Witchcraft and Wizardry";

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = "Mathematics";
const book = "mathematics";

if (subject.toLowerCase() == book.toLowerCase()) {
    console.log("The subject and book are the same.");
} else {
    console.log("The subject and book are different.");
}


const drink = '    water ';
const liquid = 'water'; 

if (drink.trim() === liquid) {
    console.log("The drink and liquid are the same.");
} else {
    console.log("The drink and liquid are different.");
}



