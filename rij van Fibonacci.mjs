import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogsteGetal = parseFloat(await userInput.question('Geef het hoogste getal van de rij: '));

let getal1 = 0;
let getal2 = 1;
let som = 0;

console.log('0');
console.log('1');

while (getal2 <= hoogsteGetal) {
    som = getal1 + getal2;
    getal1 = getal2;
    getal2 = som;
    console.log(som);
}

process.exit();
