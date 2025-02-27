// console.log(document); --> window object represents : B.O.M
// console.dir(document); --> document object represents : D.O.M
// document is given by window. So, window.document --> document

// write generic text in html
// document.write("Hello");

// finding / searching the element
// 1. document.getElementById("id-name") --> null / element
// 2. document.getElementsByClassName("class-name") --> iterable [] / [element, element, ....]
// 3. document.getElementsByTagName() --> iterable [] / [element, element, ....]
// 4. document.querySelector() -->
// 5. document.querySelectorAll() -->

const elem = document.getElementById("text-1");
console.log(elem);
elem.style.color = "blue";

const ele = document.getElementsByClassName("text-2");
console.log(ele);
ele.color = "red";

// 