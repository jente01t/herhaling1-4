import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let getallen = [];

for (let i = 0; i < 5; i++) {
    let getal = parseFloat(await userInput.question('Geef een getal: '));
    getallen.push(getal);
}

function grootsteGetal (getallen) {
    let grootsteGetal = getallen[0];
    for (let i = 0; i < getallen.length; i++) {
        if (grootsteGetal < getallen[i]) {
            grootsteGetal = getallen[i];
        }
    }
    return grootsteGetal
}

console.log(grootsteGetal(getallen));

function laagsteGetal(getallen) {
    let laagstegetal = getallen[0];
    for(let i = 0; i < getallen.length; i++) {
        if (laagstegetal > getallen[i]) {
            laagstegetal = getallen[i];
        }
    }
    return laagstegetal;
}

console.log(laagsteGetal(getallen));

function gemiddelde(getallen) {
    let gemiddelde = getallen[0];
    for (let i = 1; i < getallen.length; i++) {
        gemiddelde += getallen[i];
    }
    gemiddelde /= 5;
    return gemiddelde;
}

console.log(gemiddelde(getallen));


process.exit();