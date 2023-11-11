import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef het eerste getal: '));
let getal2 = parseFloat(await userInput.question('Geef het tweede getal: '));
let opdracht = await userInput.question('Wil je optellen, aftrekken, delen of vermenigvuldigen? ');

let som;
let verschil;
let quotient;
let product;

switch (opdracht) {
    case 'optellen':
        optellen (getal1, getal2);
        console.log(`De som van ${getal1} en ${getal2} is ${som}`);
    break;
    case 'aftrekken':
        aftrekken (getal1, getal2);
        console.log(`Het verschil van ${getal1} en ${getal2} is ${verschil}`);
    break;
    case 'delen':
        delen (getal1, getal2);
        console.log(`De quotient van ${getal1} en ${getal2} is ${quotient}`);
    break;
    case 'vermenigvuldigen':
        vermendigvuldigen (getal1, getal2);
        console.log(`Het product van ${getal1} en ${getal2} is ${product}`);
    break;
    default:
        console.log('Ik ken deze bewerking niet.')
    break;
}

function optellen (getal1, getal2) {
    som = getal1 + getal2;
    return som;
}

function aftrekken (getal1, getal2) {
    verschil = getal1 - getal2;
    return verschil;
}

function delen (getal1, getal2) {
    if (getal2 != 0) {
        quotient = getal1 / getal2;
    } else {
        console.log('Je kunt niet delen door 0');
        process.exit();
    }
    return quotient;
}

function vermendigvuldigen (getal1, getal2) {
    product = getal1 * getal2;
    return product;
}

process.exit();