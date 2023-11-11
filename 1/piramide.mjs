import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('Geef de hoogte van de piramide: '));

for (let i = 1; i <= hoogte; i++) {
    let rij = '';
    for(let j = hoogte - i; j > 0; j--) {
        rij += ' ';
    } for (let k = 1; k <= 2*i-1; k ++){
        rij += '*';
    }
    console.log(rij);
}



process.exit();

