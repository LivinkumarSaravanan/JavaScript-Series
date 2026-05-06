let mark = Number(prompt("Enter your mark:"));

if (mark >= 90) {
    console.log("Grade: O");
} else if (mark >= 80 && mark <= 89) {
    console.log("Grade: A+");
} else if (mark >= 70 && mark <= 79) {
    console.log("Grade: A");
} else if (mark >= 60 && mark <= 69) {
    console.log("Grade: B");
} else if (mark >= 50 && mark <= 59) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}


// Better Approach
// You don’t actually need <= checks because conditions are checked top to bottom:

let mark = Number(prompt("Enter your mark:"));

if (mark >= 90) {
    console.log("Grade: O");
} else if (mark >= 80) {
    console.log("Grade: A+");
} else if (mark >= 70) {
    console.log("Grade: A");
} else if (mark >= 60) {
    console.log("Grade: B");
} else if (mark >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}