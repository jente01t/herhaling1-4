import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let breedte = parseFloat(await userInput.question('Geef de breedte: '));
let hoogte = parseFloat(await userInput.question('Geef de hoogte: '));

let oppervlakte = breedte * hoogte;

console.log(`De oppervlakte van de rechthoek met breedte ${breedte} en hoogte ${hoogte} is ${oppervlakte}.`);

process.exit();