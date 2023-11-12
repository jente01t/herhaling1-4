import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let auto1 = {
    merk: 'Tesla',
    type: 'Model Y',
    kleur: 'wit',
    kilometerstand: 2300
}

let auto2 = {
    merk: 'Fiat',
    type: 'Model Punto',
    kleur: 'wit',
    kilometerstand: 1000
}

function kilometer (auto1, auto2) {
    if (auto1.kilometerstand < auto2.kilometerstand) {
        console.log(`De ${auto1.merk} ${auto1.type} heeft een lagere kilometerstand.`);
    } else {
        console.log(`De ${auto2.merk} ${auto2.type} heeft een lagere kilometerstand.`);
    }
}

kilometer (auto1, auto2);

process.exit();