import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal: '));
let som = 0;

for (let i = 3; i <= getal; i += 3) {
    som += i
}
for (let i = 5; i <= getal; i += 5) {
    som += i
}

console.log(som);

process.exit();