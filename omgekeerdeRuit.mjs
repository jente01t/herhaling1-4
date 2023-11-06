import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte =  parseFloat(await userInput.question('Geef de hoogte van de ruit: '));

let breedte = hoogte + 1;

if (hoogte % 2 === 0) {
    hoogte++;
}
let midden = (hoogte + 1) / 2;

function sterren (hoogte, breedte) {
    for (let i = 1; i <= hoogte; i++) {
        let rij = '';
        for (let j = 1; j <= breedte; j++) {
            rij += '*';
        }

        for (let i = 1; i <= midden; i++) {
            let rij = '';
            for(let j = 1; j <= midden - i; j++) {
                rij += ' ';
            } for (let k = 1; k <= 2 * i - 1; k++) {
                rij += 'X'
            }
            console.log(rij);
        }
        console.log(rij);
    }
}

function ruit (midden) {
    for (let i = 2; i <= midden; i++) {
        let rij = '';
        for(let j = 1; j <= midden - i; j++) {
            rij += ' ';
        } for (let k = 1; k <= 2 * i - 1; k++) {
            rij += 'X'
        }
        console.log(rij);
    }
    for (let i = midden - 1; i >0 ; i--) {
        let rij = '';
        for(let j = 1; j <= midden - i; j++) {
            rij += ' ';
        } for (let k = 1; k <= 2 * i - 1; k++) {
            rij += 'X'
        }
        console.log(rij);
    }
}







ruit (hoogte, breedte)

//sterren (hoogte, breedte);

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