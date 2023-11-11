import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = 0;
let gemiddelde = 0;
let aantal = 0;
let temp = 0;

while (gemiddelde < 25) {
    gemiddelde = temp;
    getal = parseFloat(await userInput.question('Geef een getal: '));
    gemiddelde += getal;
    aantal ++;
    temp = gemiddelde;
    gemiddelde /= aantal;
}

console.log(gemiddelde);

process.exit();