import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question('Geef de hoogte van de piramide: '));
let startTop = false;
let startLeft = false;

if (startTop == true && startLeft == true) {
    for (let i = 1; i <= hoogte; i++) {
        let rij = '';
        for (let j = 1; j <= i; j++) {
            rij += i;
        }
        console.log(rij);
    }
}

if (startTop == false && startLeft == true) {
    for (let i = hoogte; i > 0; i--) {
        let rij = '';
        for (let j = i; j > 0; j--) {
            rij += i;
        }
        console.log(rij);
    }
}

if (startTop == false && startLeft == false) {
    for (let i = 1; i <= hoogte; i++) {
        let rij = '';
        for(let j = hoogte - i; j > 0; j--) {
            rij += ' ';
        } for (let k = 1; k <= i; k++){
            rij += i;
        }
        console.log(rij);
    }
}


process.exit();