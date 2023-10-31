import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question('Geef de hoogte van de piramide: '));
let startTop = true;
let startLeft = true;

if (startTop == true && startLeft == true) {
    for (let i = 1; i <= hoogte; i++) {
        let rij = '';
        for (let j = 1; j <= i; j++) {
            rij += '*';
        }
        console.log(rij);
    }
}

process.exit();