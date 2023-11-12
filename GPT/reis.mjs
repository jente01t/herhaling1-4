import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let reizen = [
    ["Ibiza", [300, 400, 245, 780, 423]],
    ["Mallorca", [500, 550, 600, 720]],
    ["Madeira", [650, 750, 910, 600, 620]],
    ["Kreta", [530, 590, 610, 490, 495]]
]

for (let i = 0; i < reizen.length; i++) {
    let prijzen = reizen[i][1];
    let laagstePrijs = prijzen[0];

    for (let j = 1; j < prijzen.length; j++) {
        if (prijzen[j] < laagstePrijs) {
            laagstePrijs = prijzen[j];
        }
    }

    console.log('De laagste prijs voor ' + reizen[i][0] + ' is ' + laagstePrijs);
}

process.exit();