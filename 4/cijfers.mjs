import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

for (let i = 1; i <= 3; i++) {
    let rij = '';
    for (let j = 1; j <= 4; j++) {
        rij += i * j + ' ';
    }
    console.log(rij);
}

process.exit();








/*
1 2 3 4
2 4 6 8
3 6 9 12
*/