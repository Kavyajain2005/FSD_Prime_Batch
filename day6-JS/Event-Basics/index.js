const data = [
    {name: 'Kavya', city: 'Delhi', email: "jainkavya200500@gmail.com"},
    {name: 'Parth', city: 'Mumbai', email: "partharora200300@gmail.com"},
    {name: 'Harshit', city: 'Noida', email: "harshit200400@gmail.com"},
    {name: 'Ram', city: 'Gzb', email: "ramarora200400@gmail.com"}
];

const root = document.getElementById('parent');

data.forEach((elem) => {
    const newCard = document.createElement('div');
    newCard.addEventListener("click", () => {
        newCard.style.backgroundColor = getRandomColor();
    });
    // setAttribute
    // classList.add
    newCard.className = "card";
    newCard.innerHTML = `
        <h4>${elem.name}</h4>
        <h6>${elem.city}</h6>
        <p class=text>${elem.email}</p>
    `;
    root.appendChild(newCard);
});

const handleBgChange = () => {
    console.log("btn clicked!");
    // logic to change background color
    const bodyElem = document.querySelector('body');
    bodyElem.style.backgroundColor = getRandomColor();    
};

// handleBgChange();

const getRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
}

const textElement = document.querySelector(".text");
textElement.addEventListener("click", (event) => {
    console.log("para clicked", event);
    event.stopPropagation();
    textElement.style.backgroundColor = getRandomColor();
});
