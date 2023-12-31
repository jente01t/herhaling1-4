import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal: '));

function factorial (getal) {
    let uitkomst = 1;
    for (let i = 1; i <= getal; i++) {
        uitkomst *= i;
    }
    return uitkomst;
}

console.log(`De factorial van het getal ${getal} is: ${factorial(getal)}`);

process.exit();