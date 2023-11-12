import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let eendjes = [];

for (let i = 0; i < 10; i++) {
    let eend = parseFloat(await userInput.question('Geef een cijfer tussen 1 en 5: '));
    if (eend < 1 || eend > 5) {
        eend = parseFloat(await userInput.question('Het getal moet tussen de 1 en 5 zitten: '));
    }
    eendjes.push(eend);
}

function printArray (eendjes) {
    let rij = '';
    for (let i = 0; i < eendjes.length; i++) {
        rij += eendjes[i] + ' ';
    }
    console.log();
    console.log(rij);
}

printArray(eendjes);

function hoogste (eendjes) {
    let hoogstePositie = 0;
    for (let i = 0; i < eendjes.length; i++) {
        if (eendjes[i] + eendjes[i + 1] + eendjes[i + 2] + eendjes[i + 3] > hoogstePositie) {
            hoogstePositie = i;
        }
    }
    return hoogstePositie;
}

let positieUser = parseFloat(await userInput.question('Geef de positie waarbij de volgende 4 getallen opgeteld het hoogste is: '));

if (positieUser == hoogste(eendjes)) {
    console.log();
    console.log('Je hebt het goed!');
} else {
    console.log();
    while (positieUser != hoogste(eendjes)) {
        positieUser = parseFloat(await userInput.question('Niet juist, geef de positie opnieuw: '));
    }
    console.log('Je hebt het goed!');
}



process.exit();