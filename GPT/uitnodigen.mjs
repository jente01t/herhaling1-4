import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let vrienden = [ 
    "Eddy",
    "Frieda",
    "Gonny",
    "Henk",
    "Kees",
    "Mia"
];

let goedeVriende = [];

for (let i = 0; i < vrienden.length; i++) {
    let keuze = await userInput.question('Wil je ' + vrienden[i] + ' kiezen?');
    if (keuze == 'ja') {
        goedeVriende.push(vrienden[i]);
    }
}

console.log();
console.log('De nieuwe lijst is: ');

for (let i = 0; i < goedeVriende.length; i++) {
    console.log(goedeVriende[i]);
}

process.exit();