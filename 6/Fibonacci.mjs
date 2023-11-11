import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Fibonacci = [0, 1];

for (let i = 0; i < 8; i++) {
    Fibonacci[i + 2] = Fibonacci[i] + Fibonacci[i + 1];
    Fibonacci.push[i + 2];
}

console.log(Fibonacci);

process.exit();