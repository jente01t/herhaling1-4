import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = [];

for (let i = 1; i <= 5; i++) {
    getal[i] = parseFloat(await userInput.question('Geef een getal: '));
}

let hoogsteGetal = getal[1];
let laagsteGetal = getal[1];
let gemiddelde = 0;

for (let i = 1; i <= 5; i++) {
    if (getal[i] > hoogsteGetal){
        hoogsteGetal = getal[i];
    } if (getal[i] < laagsteGetal){
        laagsteGetal = getal[i];
    }
    gemiddelde += getal[i];
}

gemiddelde /= 5;

console.log('Het hoogste getal is: ' + hoogsteGetal);
console.log('Het laagste getal is: ' + laagsteGetal);
console.log('Het gemiddelde van de 5 getallen is: ' + gemiddelde);

process.exit();