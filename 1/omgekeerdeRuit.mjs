import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte =  parseFloat(await userInput.question('Geef de hoogte van de ruit: '));

let breedte = hoogte + 1;

if (hoogte % 2 === 0) {
    hoogte++;
}
let midden = (hoogte + 1) / 2;

for (let i = 0; i <= hoogte; i++) {
    let rij = '';
    for (let j = 0; j <= hoogte - i; j++) {
        rij += '*';
    } for (let k = 1; k <= 2 * i; k++) {
        rij += ' ';
    } for (let l = 0; l <= hoogte - i; l++) {
        rij += '*';
    }
    console.log(rij);
}
for (let i = hoogte - 1; i > -1; i--) {
    let rij = '';
    for (let j = 0; j <= hoogte - i; j++) {
        rij += '*';
    } for (let k = 1; k <= 2 * i; k++) {
        rij += ' ';
    } for (let l = 0; l <= hoogte - i; l++) {
        rij += '*';
    }
    console.log(rij);
}

process.exit();


/*
**********
****  ****
***    ***
**      **
*        *
**      **
***    ***
****  ****
**********
*/