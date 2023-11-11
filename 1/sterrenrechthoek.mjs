import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let breedte = parseFloat(await userInput.question('Geef de breedte van de rechthoek: '));
let hoogte = parseFloat(await userInput.question('Geef de hoogte van de rechthoek: '));

for(let i = 1; i <= hoogte; i++){
    let rij = '';
    if (i == 1 || i == hoogte) {
        for (let j = 1; j <= breedte; j++) {
            rij += '*';
        }
    } else {
        rij += '*';
        for(let j = 1; j <= breedte - 2; j++) {
            rij += ' ';
        }
        rij +='*'
    }
    console.log(rij);
}

process.exit();