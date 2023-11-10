import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let gemiddelde = 0;

for (let i = 1; i <= 4; i++) {
    gemiddelde += parseFloat(await userInput.question('Geef het getal: '));
}

gemiddelde /= 4;

console.log(gemiddelde);

process.exit();