import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam;

do {
    naam = await userInput.question('Geef een naam: ');
} while (naam == '');

console.log(naam);

process.exit();