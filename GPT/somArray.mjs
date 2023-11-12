import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let array = [];
let som = 0;

for (let i = 0; i <= 2; i++) {
    var getal = parseFloat(await userInput.question('Geef een getal: '));
    array.push(getal);
}

for (let i = 0; i < array.length; i++) {
    som += array[i];
}

console.log(som);

process.exit();