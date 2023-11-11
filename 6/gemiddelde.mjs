import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let punten = [10, 8, 7, 4, 6, 7, 7, 8 ,9 ,10];
let gemiddelde = 0;

for (let i = 0; i < punten.length; i++) {
    gemiddelde += punten[i];
}

gemiddelde /= punten.length

console.log(gemiddelde);

process.exit();