import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let fruit = await userInput.question('Van welk fruit wil je de prijs weten? ');
let prijs = 0;

switch (fruit) {
    case 'appel':
    case 'peer':
        prijs = 1.50
    break;
    case 'meloen' :
        prijs = 3
    default: 
        console.log('Ik ken dit fuit niet.');
        process.exit();
}

console.log('De kostprijs van ' + fruit + ' is ' + prijs + '.');

process.exit();