const arr = [10, 20, 30];

const printPretty = (elem, idx, c, d, e) => {
    console.log("*",elem, idx, c, d, e);
}

arr.forEach(printPretty);

const obj = {
    maths: 30,
    english: 10, 
    hindi: 20,
}

const marks = Object.values(obj);
const subjects = Object.keys(obj);
const keys = Object.entries(obj);

console.log(marks);
console.log(subjects);
console.log(keys);