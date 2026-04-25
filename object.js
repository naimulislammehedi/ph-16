// premetive data types are immutable, meaning we cannot change their value after they have been created.
const age = 21; 
const school = "University of California, Berkeley";
const isPassed = true;
let isDeveloper; 

console.log(isDeveloper); // undefined

const subjects = ["Math", "English", "History"];
// const bottle = ['White', 'Red', 'Rose'];

const bottle = {
    brand: "Coca-Cola",
    price: 1.99,
    color: "Brown",
    isClean: true,
}

// non premitive data types are mutable, meaning we can change their properties or values after they have been created.
const subject = {
    name: "Math",
    teacher: "Mr. Smith",
    examDate: "2024-12-15",
    chapters: ["Algebra", "Geometry", "Calculus"],
    exams: {
        midterm: "2024-10-01",
        final: "2024-12-15",
    }
}