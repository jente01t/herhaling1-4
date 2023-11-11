import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maxGetal = parseFloat(await userInput.question('Geef het grootste getal van de rij: '));

let getal1 = 0;
let getal2 = 1;
let getal3 = 0;

console.log(getal1);
console.log(getal2);

while (getal3 <= maxGetal) {
    getal3 = getal1 + getal2;
    getal1 = getal2;
    getal2 = getal3
    if (getal3 <= maxGetal) {
        console.log(getal3);
    }
}

process.exit();