import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let geboortJaar = parseFloat(await userInput.question('Geef je geboortejaar: '));
let toekomstJaar = parseFloat(await userInput.question('Geef je toekomstjaar: '));

let leeftijd = toekomstJaar - geboortJaar;

console.log(`In ${toekomstJaar} zal ik ${leeftijd} of ${leeftijd + 1} jaar oud zijn.`);

process.exit();