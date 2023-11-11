import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

for (let i = 0; i <= 10; i++) {
    let uitkomst = 0;
    for (let j = 0; j <= 10; j++) {
        uitkomst = i * j
        console.log(i + ' * ' + j + ' = ' + uitkomst);
    }
    console.log('');
}

process.exit();