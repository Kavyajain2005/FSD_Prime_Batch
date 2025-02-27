const data = [
    { id: "abcd1", name: "Kavya", city: "Delhi" },
    { id: "a1", name: "Parth", city: "Noida" },
    { id: "b2", name: "Rohan", city: "Mumbai" },
    { id: "abcd3", name: "Nikhil", city: "Delhi" }
];

const root = document.getElementById("root");

const showcards = () => {
    root.innerHTML = "";
    data.forEach((elem) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <p>${elem.city}</p>
            <button onclick="deleteCard('${elem.id}')">Delete Card</button>
        `;
        root.appendChild(card);
    });
};

const deleteCard = (id) => {
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        showcards();
    }
};

// Show initial cards
showcards();
