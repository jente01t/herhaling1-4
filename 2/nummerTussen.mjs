import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal: '));
let min = 2;
let max = 22

if (getal > min && getal < max) {
    console.log(getal + ' ligt tussen ' + min + ' en ' + max);
} else {
    console.log(getal + ' ligt niet tussen ' + min + ' en ' + max);
}

process.exit();