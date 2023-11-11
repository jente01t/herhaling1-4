import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let temperatuur = parseFloat(await userInput.question('Geef de temperatuur: '));

function Temperatuurconverter (temperatuur, isCelcius = false) {
    if (isCelcius) {
        temperatuur = (temperatuur * 1.8) + 32;
    } else {
        temperatuur = (temperatuur - 32) / 1.8;
    }
    return temperatuur;
}

console.log(`De omgezette termpertauur is: ${Temperatuurconverter(temperatuur)}`);

process.exit();