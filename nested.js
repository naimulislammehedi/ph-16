const college = {
    name: "ABC College",
    location: "City XYZ",
    departments: {
        cs: {
            name: "Computer Science",
            head: "Dr. Smith"
        },
        math: {
            name: "Mathematics",
            head: "Dr. Johnson"
        }
    }, 
    year: [2020, 2021, 2022]
}

console.log(college.name); // Output: ABC College
console.log(college.departments.cs.name); // Output: Computer Science
console.log(college.departments.cs.head = "Dr. Brown"); // Output: Dr. Brown
console.log(college.departments.cs.head); // Output: Dr. Brown

console.log(college.year[1]); // Output: 2021

console.log(college); 

delete college.year; 
console.log(college);