import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let serie = await userInput.question('Geef de naam van een serie: ');

function locatieSerie (serie) {
    let locatie;
    switch (serie) {
        case "Thuis":
            locatie = "Ternat";
            break;
        case "Friends":
            locatie = "NY";
            break;
        default:
            console.log("Sorry, ik weet niet waar de serie " + serie + " zich afspeelt");
            break;
    }
    return locatie;
}

console.log(`${serie} vindt plaats in ${locatieSerie(serie)}.`);

process.exit();