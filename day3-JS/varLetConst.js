// Var => Function Scope
// Let => Block Scope
// Const => Block Scope

// const temp = () => {
//     if(true) {
//         var username = "Kavya";
//     }
//     console.log(username);
// };

// temp();
// console.log(username);

// function sumMod10(){
//     function printText(a, b) {
//         return (a + b) % 10;
//     }
//     return printText(10, 20);
// }

// console.log(sumMod10());

const sumMod10 = (a, b) => {
    const ans = (a + b) % 10;
    
    const printPretty = (txt) => {
        console.log("===", txt, "====");
    };
    
    printPretty(ans);
};

sumMod10(10, 34);