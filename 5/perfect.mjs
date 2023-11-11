import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function perfect (min, max) {
    for (let getal = min; getal <= max; getal++) {
        let som = 0;
        for (let deler = 1; deler < getal; deler++) {
            if (getal % deler == 0) {
                som += deler;
            }
        }
        if (som === getal) {
            console.log(getal);
        }
    }
}

perfect (1, 100);

process.exit();