// Task 1: Biography using var, primitive types and nested objects
var name = "Warda Aslam";
var age = 21;
var isStudent = true;

var bio = {
    name: name,
    age: age,
    isStudent: isStudent,
    city: "Islamabad",
    address: {
        city: "Islamabad",
        country: "Pakistan"
    },
    degreeProgram: {
        degree: "BS Computer Science",
        university: "Air University"
    }
};

console.log("Name:", bio.name);
console.log("Age:", bio.age);
console.log("Student:", bio.isStudent);
console.log("City:", bio.address.city);
console.log("Country:", bio.address.country);
console.log("Degree:", bio.degreeProgram.degree);
console.log("University:", bio.degreeProgram.university);
