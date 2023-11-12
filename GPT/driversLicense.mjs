import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let speedLimit = 70;
let kmPerPoint = 5;
let strafpunten = 0;

while (strafpunten < 12) {
    let snelheid = parseFloat(await userInput.question('Geef je snelheid: '));

    if (snelheid <= speedLimit) {
    console.log('OK');
    } else if (snelheid > speedLimit) {
        snelheid -= speedLimit;
        strafpunten += Math.floor(snelheid / 5);
        console.log(strafpunten);
    }
}

console.log('drivers license is suspended!')

process.exit();