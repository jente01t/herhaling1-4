import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let array = [];
let gemiddelde = 0;
let getal = 5;

while (getal != 0) {
    getal = parseFloat(await userInput.question('Geef een getal(geef 0 om te stoppen): '));
    array.push(getal);
}

array.pop();

console.log(array.length);

for (let i = 0; i< array.length; i++) {
    gemiddelde += array[i];
}

gemiddelde /= array.length;

console.log(gemiddelde);
   
process.exit();
