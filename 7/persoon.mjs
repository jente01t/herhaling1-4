import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let persoon = [
    {naam: 'Jente', leeftijd: 18},
    {naam: 'Bob', leeftijd: 32 },
    { naam: 'Charlie', leeftijd: 25 },
    { naam: 'David', leeftijd: 30 }
]

for (let i = 0; i < persoon.length; i++) {
    console.log("Naam " + persoon[i].naam + ', leeftijd ' + persoon[i].leeftijd);
}

process.exit();