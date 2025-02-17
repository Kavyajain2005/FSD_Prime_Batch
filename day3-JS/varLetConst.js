// Var => Function Scope
// Let => Block Scope
// Const => Block Scope

const temp = () => {
    if(true) {
        var username = "Kavya";
    }
    console.log(username);
};

temp();
console.log(username);