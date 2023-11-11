import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maxGetal = parseFloat(await userInput.question('Geef het grootste getal van de rij: '));