import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal: '));

function priemgetal (getal) {
    let i = 1;
    let aantal = 0;
    while (i < getal) {
        if (getal % i == 0) {
            aantal++;
        }
    i++;
    }
    if (aantal < 2) {
        console.log('Het getal ' + getal + ' is een priemgetal.')
    } else {
        console.log('Het getal ' + getal + ' is geen priemgetal.')
    }
}

priemgetal(getal);

process.exit();