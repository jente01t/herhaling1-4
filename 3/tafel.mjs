import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('De tafel van: '));

for (let i = 1; i <= 10; i++) {
    let verm = getal * i;
    console.log(`${getal} * ${i} = ${verm}`);
}

process.exit();