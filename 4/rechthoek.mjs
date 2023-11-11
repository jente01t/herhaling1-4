import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('Hoogte: '));
let breedte = parseFloat(await userInput.question('breedte: '));

for (let i = 1; i <= hoogte; i++) {
    let rij = '';
    for (let j = 1; j <= breedte; j++) {
        if (i == 1 || i == hoogte || j == 1 || j == breedte) {
            rij += '*';
        } else {
            rij += ' ';
        }
    }
    console.log(rij);
}

process.exit();