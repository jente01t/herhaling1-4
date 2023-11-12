import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maxGetal = parseFloat(await userInput.question('Geef het grootste getal: '));

for (let i = 1; i <= maxGetal / 5; i++) {
    let rij ='';
    for (let j = 1; j <= 5; j++) {
        rij += ' ' + i * j + ' ' + (i * j) * (i * j);
    }
    console.log(rij);
}

process.exit();






/*

1 1 2 4 3 9 4 16 5 25


*/