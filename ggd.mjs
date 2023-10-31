import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef het eerste getal: '));
let getal2 = parseFloat(await userInput.question('Geef het tweede getal: '));
let ggd = 0;

for (let i = 1; i <= getal1; i++) {
    if (getal1 % i == 0 && getal2 % i == 0) {
        ggd = i;
    }
}

console.log('De ggd van ' + getal1 + ' en ' + getal2 + ' is ' + ggd);

process.exit();