import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let keuze = await userInput.question('cirkel, driehoek, rechthoek of vierkant? ');

switch (keuze) {
    case 'cirkel':
        let gegevensCirkel = await cirkel();
        console.log(`De oppervlakte van de cirkel met straal ${gegevensCirkel[1]} is ${gegevensCirkel[0]}.`)
    break;
    case 'driehoek':
        let gegevensDriehoek = await driehoek();
        console.log(`De oppervlakte van de driehoek met basis ${gegevensDriehoek[2]} en hoogte ${gegevensDriehoek[1]} is ${gegevensDriehoek[0]}.`);
    break;
     case 'rechthoek':
        let gegevensRechthoek = await rechthoek();
        console.log(`De oppervlakte van de rechthoek met basis ${gegevensRechthoek[2]} en hoogte ${gegevensRechthoek[1]} is ${gegevensRechthoek[0]}.`);
     break;
    case 'vierkant':
        let gegevensVierkant = await rechthoek();
        console.log(`De oppervlakte van het vierkant met basis ${gegevensVierkant[2]} en hoogte ${gegevensVierkant[1]} is ${gegevensVierkant[0]}.`);
    break;
    default:
        console.log('Dit ken ik niet.');
    break;
}




async function cirkel () {
    let straal = parseFloat(await userInput.question('Geef de straal: '));
    let oppcirkel = Math.PI ** straal;
    return [oppcirkel, straal];
}

async function driehoek () {
    let basis = parseFloat(await userInput.question('Geef de basis: '));
    let hoogte = parseFloat(await userInput.question('Geef de hoogte: '));
    let oppdriehoek = (basis * hoogte) / 2;
    return [oppdriehoek, hoogte, basis];
}

async function rechthoek () {
    let basis = parseFloat(await userInput.question('Geef de basis: '));
    let hoogte = parseFloat(await userInput.question('Geef de hoogte: '));
    let opprechthoek = basis * hoogte;
    return [opprechthoek, hoogte, basis];
}


process.exit();