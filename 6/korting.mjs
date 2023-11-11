import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let prijzen = [10, 15, 20 ,100];

console.log(geefKorting(prijzen));



function geefKorting (prijzen) {
    for (let i = 0; i < prijzen.length; i++) {
        prijzen[i] = prijzen[i] - prijzen[i] * 15 / 100;
    }
    return prijzen;
}

process.exit();