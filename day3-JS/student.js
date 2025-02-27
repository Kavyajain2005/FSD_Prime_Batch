const n = parseInt(prompt("Enter number of subjects: "));
let total = 0, maxi = 0, sub = "";
for(let i=1; i<=n; i++) {
    let name = prompt("Enter the name of subject: ");
    let marks = parseInt(prompt("Enter the marks in subject: "));
    total += marks;
    if(marks > maxi) {
        maxi = marks;
        sub = name;
    }
}
var percent = total / n;
console.log("Final percentage is: ", percent);
console.log("The highest scoring subject is: ", sub);

if(percent >= 90) {
    console.log("Grade: A+");
}
else if(percent >= 80 && percent < 90) {
    console.log("Grade: A");
}
else if(percent >= 70 && percent < 80) {
    console.log("Grade: B+");
}
else if(percent >= 60 && percent < 70) {
    console.log("Grade: B");
}
else if(percent>= 50 && percent < 60) {
    console.log("Grade: C");
}
else if(percent >= 40 && percent < 50) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}