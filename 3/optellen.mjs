import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som = 0;
let getal;

do {
    getal = parseFloat(await userInput.question('Geef een getal: '));
    som += getal;
} while (getal > 0);

console.log(som);

process.exit();