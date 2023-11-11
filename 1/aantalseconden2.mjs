import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let totaalSeconden = parseFloat(await userInput.question('Geef het totaal aantal seconden: '));
let temp = totaalSeconden;

let dagen = Math.floor(totaalSeconden / (24 * 60 * 60));
totaalSeconden = totaalSeconden - dagen * (24 * 60 * 60);
let uren = Math.floor(totaalSeconden / (60 * 60));
totaalSeconden = totaalSeconden - uren * (60 * 60);
let minuten = Math.floor(totaalSeconden / 60);
totaalSeconden = totaalSeconden - minuten * 60;
let seconden = Math.floor(totaalSeconden);


console.log(`${temp} is ${dagen} dagen ${uren} uren ${minuten} minuten ${seconden} seconden.`)

process.exit();