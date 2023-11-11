import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let persoon = {
    naam: 'Jente',
    leeftijd: 18,
};

console.log(persoon.naam);

process.exit();