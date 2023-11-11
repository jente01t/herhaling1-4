import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

function fullname () {
    console.log(this.naam + ' ' + this.Achternaam);
}

let persoon = {
    naam: 'Jente',
    Achternaam: 'Tavernier',
    leeftijd: 18,
}

persoon.fullname = fullname;

persoon.fullname();



process.exit();