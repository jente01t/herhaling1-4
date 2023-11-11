import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let breedte = parseFloat(await userInput.question('Geef de breedte van de rechthoek: '));
let hoogte = parseFloat(await userInput.question('Geef de hoogte van de rechthoek: '));
let opperervlakte = 0;

function oppervlakteRechthoek (breedte, hoogte) {
    opperervlakte = breedte * hoogte
    return opperervlakte
}

console.log('De oppervlakte van de rechthoek met breedte ' + breedte + ' en  hoogte ' + hoogte + ' is ' + oppervlakteRechthoek(breedte, hoogte))

process.exit();