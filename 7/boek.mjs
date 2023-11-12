import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let lijstBoeken = {
    boek1: {
        titel: 'boek1',
        auteur: {
            voornaam: 'auteurVoornaam1',
            achternaam: 'auteurachternaam1'
        }
    },
    Boek2: {
        titel: 'boek2',
        auteur: {
            voornaam: 'auteurVoornaam2',
            achternaam: 'auteurachternaam2'
        }
    },  
}

console.log(lijstBoeken.Boek2);

process.exit();