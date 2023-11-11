import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let array = [100, 5, -4, 8, 4, 20, -60, 8, 9, -1000];
let temp = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
            temp = array[j + 1];
            array[j + 1] = array[j];
            array[j] = temp;
        }
    }
}

console.log(array);

process.exit();