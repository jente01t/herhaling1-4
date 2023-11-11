import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 0;
let gemiddelde = 0;
let aantal = 0;

while (gemiddelde < 25) {
    gemiddelde *= aantal;
    getal = parseFloat(await userInput.question('Geef een getal: '));
    aantal++;
    gemiddelde += getal;
    gemiddelde = gemiddelde / aantal;
}

console.log('Het gemiddelde van al de getallen is: ' + gemiddelde);

process.exit();