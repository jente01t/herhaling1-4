import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let start = parseFloat(await userInput.question('Geef een startgetal: '));
let end = parseFloat(await userInput.question('Geef een eindgetal: '));
let deler1 = parseFloat(await userInput.question('Geef de eerste deler: '));
let deler2 = parseFloat(await userInput.question('Geef de tweede deler: '));
let deelbaar1 = await userInput.question('Moet het getal deelbaar zijn door ' + deler1 + ' ?')
let deelbaar2 = await userInput.question('Moet het getal deelbaar zijn door ' + deler2 + ' ?')

for (let i = start; i <= end; i++) {
    if (deelbaar1 == 'ja' && deelbaar2 == 'ja') {
        if (i % deler1 == 0 && i % deler2 == 0) {
            console.log(i);
        }
    } else if (deelbaar1 == 'ja') {
        if (i % deler1 == 0) {
            console.log(i);
        } 
    } else if (deelbaar2 == 'ja') {
        if (i % deler2 == 0) {
            console.log(i);
        }
    }
}

process.exit();