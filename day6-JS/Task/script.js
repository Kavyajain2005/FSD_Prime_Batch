const data = [
    {name: 'Kavya', roll: 85, cgpa: 8, email: "jainkavya200500@gmail.com"},
    {name: 'Parth', roll: 119, cgpa: 7, email: "partharora2002@gmail.com"},
    {name: 'Rohan', roll: 128, cgpa: 6, email: "rohangoel2004@gmail.com"},
    {name: 'Nikhil', roll: 97, cgpa: 5, email: "nikhilgrover2004@gmail.com"}
]

const root = document.getElementById('parent');

data.forEach((elem) => {
    const newCard = document.createElement('div');
    newCard.addEventListener("click", () => {
        newCard.style.backgroundColor = getRandomColor();
    });

    newCard.className = "card";
    newCard.innerHTML = `
    <h4>${elem.name}</h4>
    <h5>${elem.roll}</h5>
    <h5>${elem.cgpa}</h5>
    <p>${elem.email}</p>
    `;
    root.appendChild(newCard);
});

const handleBgChange = () => {
    const bodyElem = document.querySelector('body');
    bodyElem.style.backgroundColor = getRandomColor();
};

const getRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
};

const handleEditions = () => {

};

const handleDeletions = () => {
    
};