import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jaar = parseFloat(await userInput.question('Geef een jaar: '));

if (jaar % 4 == 0 && jaar % 100 != 0 || jaar % 400 == 0 && jaar % 100 != 0) {
    console.log('Februari heeft 29 dagen.');
} else {
    console.log('Februari heeft 28 dagen.');
}

process.exit();