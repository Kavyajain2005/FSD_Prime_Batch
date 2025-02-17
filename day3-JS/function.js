// **********************Function Declaration*******************************

// print("Mohan");

// function print(a) {
//     console.log("Hello", a);
// }

// function print(a) {
//     console.log("Hi", a);
// }

// print("Kavya");

/* 
CONS:
1. It can be defined several times with same name
2. We can call it before declaration
*/

// **********************Function Assignment*********************************

// const view = function printText(a) {
//     console.log("Hi", a);
// };

// view("Kavya");
// printText("Kavya");



// *********************Anonymous Function Assignment****************************

// const view = function (a) {
//     console.log("Hi", a);
// };

// view("Kavya");
// printText("Kavya");


// **********************Arrow Function Assignment********************************
// ES6+ Syntax

// const view = (a) => {
//     console.log("Hi", a);
// };

// view("Kavya");
// printText("Kavya");


// Function to calculate sum and return its mod 10 value using type 1,2,3,4

// Type-1

// function sum(a, b) {
//     return (a + b) % 10;
// }
// const ans = sum(10, 15);
// console.log(ans);


// Type-2

// const view = function sum(a, b) {
//     return (a + b) % 10;
// }
// const ans = view(10, 15);
// console.log(ans);


// Type-3

// const view = function (a, b) {
//     return (a + b) % 10;
// }
// const ans = view(10, 15);
// console.log(ans);


// Type-4
// Remove curly braces amd also remove the return keyword

const view = (a, b) => (a + b) % 10;

// const view = (a, b) => {
//     return (a + b) % 10;
// }

const ans = view(10, 15);
console.log(ans);
