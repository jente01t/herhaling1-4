import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;

for (let i = 1; i <= 3; i++) {
    let getal = parseFloat (await userInput.question("Geef een getal: "));
    if (getal < 0) {
        process.exit();
    } else {
        som += getal;
    }
}

console.log("De som van de getallen is: " + som);


// let som =0;
// let getal = 0;

// getal = parseFloat (await userInput.question("Geef een getal: "));
// if (getal < 0) {
//     process.exit();
// } else {
//     som += getal;
// } getal = parseFloat (await userInput.question("Geef een getal: "));
// if (getal < 0) {
//     process.exit();
// } else {
//     som += getal;
// } getal = parseFloat (await userInput.question("Geef een getal: "));
// if (getal < 0) {
//     process.exit();
// } else {
//     som += getal;
// }

// console.log("De som van de getallen is: " + som);

