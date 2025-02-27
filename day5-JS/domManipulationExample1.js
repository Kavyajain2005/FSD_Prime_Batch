// console.dir(document);
// console.dir(document.children);
// console.dir(document.children[0]);
// console.dir(document.children[0].children[1]);
// console.dir(document.children[0].children[1].children[0]);

// h1 color red
document.children[0].children[1].children[0].style.color = "red";

// outer div bg blue
// const outerDivs = document.getElementsByTagName("div");
// outerDivs[0].style.backgroundColor = "blue";
// OR
const outerDiv = document.querySelector("div");
outerDiv.style.backgroundColor = "blue";


// inner div bg yellow
console.log(outerDiv);
// outerDiv.children.forEach((elem) => {
//     elem.style.backgroundColor = "yellow";
// });


// OR
const divChildren = Array.from(document.querySelector("div"));
divChildren.forEach((elem) => {
    elem.style.backgroundColor = "yellow";
});
// ------------------------------------------------------------

const mappings = {
    Invitation: "You are invited for event",
    Reminder: "You are reminded for task",
    Notice: "You have a notice from college",
    Message: "You have 7 messages",
};

const newElement = document.createElement("div");
const rootElement = document.querySelector("body");
rootElement.appendChild(newElement);

console.log(Object.entries(mappings));

Object.entries(mappings).forEach(() => {
    const newChildDiv = document.createElement("div");
    // newChildDiv.innerText = "hello from dom !";
    newChildDiv.style,border = "1px solid lime";
    newChildDiv.innerHTML = `
    <h4 style="color: orange">Hello!</h4>
    <p>Hi!</p>
    `;
    newElement.appendChild(newChildDiv);
});
