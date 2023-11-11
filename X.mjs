import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let hoogte = parseFloat(await userInput.question('Geef de hoogte van de X: '));

if (hoogte % 2 == 0) {
    hoogte++;
}

let midden = (hoogte + 1) / 2;

for (let i = 1; i <= midden; i++) {
    let rij = '';
    for (let j = 1; j < i; j++) {
        rij += ' ';
    } rij += 'X';
    for (let k = i; k <= hoogte - i - 1; k++) {
        rij += ' ';
    } if (i != midden) {
        rij += 'X';
    }
    console.log(rij);
}

for (let i = midden - 1; i > 0; i--) {
    let rij = '';
    for (let j = 1; j < i; j++) {
        rij += ' ';
    } rij += 'X';
    for (let k = i; k <= hoogte - i - 1; k++) {
        rij += ' ';
    } rij += 'X';
    console.log(rij);
}

process.exit();


/*
x     x
 x   x
  x x
   x
  x x
 x   x
x     x
*/