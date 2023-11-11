import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('Geef een maand: ');
let aantaldagen = 0;

switch (maand) {
    case 'januari':
    case 'maart':
    case 'mei':
    case 'juli':
    case 'augustus':
    case 'oktober':
    case 'december':
        aantaldagen = 31;
    break;
    case 'april':
    case 'juni':
    case 'september':
    case 'novemeber':
        aantaldagen = 30;
    break;
    case 'februari':
        aantaldagen = 28;
    break;
    default:
        console.log('Deze maand ken ik niet.');
        process.exit();
}

console.log(`De maand ${maand} heeft ${aantaldagen} dagen.`);

process.exit();