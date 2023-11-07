import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



async function omzetten () {
    let punt = parseFloat(await userInput.question('Geef het punt: '));
    let maxPunt = parseFloat(await userInput.question('Geef het maximale punt dat je kunt bereiken: '));
    let omzettenMaxPunt = maxPunt / maxPunt;
    let omzettenPunt = punt / maxPunt;
    omzettenMaxPunt *= 20;
    omzettenPunt *= 20;
    console.log(punt + ' omgezet naar een getal op 20 is: ' + omzettenPunt + ' / ' + omzettenMaxPunt);
}

await omzetten();

process.exit();