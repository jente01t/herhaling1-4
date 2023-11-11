import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let user = 0;
let computer = 0;

while (user <= 3) {
    await keuze (user, computer);
}



async function keuze (user, computer) {
    let keuzeUser = await userInput.question('SSP? ');
    let choices = ['steen', 'papier', 'schaar'];
    let keuzeComputer = choices[Math.floor(Math.random()*choices.length)];

    if (keuzeUser == 'schaar' && keuzeComputer == 'papier' || 
    keuzeUser == 'steen' && keuzeComputer == 'schaar' ||
    keuzeUser == 'papier' && keuzeComputer == 'steen') {
        user++;
    } else {
        computer++;
    }
    winaar (user, computer)
}

async function winaar (user, computer) {
    console.log(`Gebruiker: ${user} - Computer: ${computer}`)
    if (user == 3 || computer == 3) {
        if (user == 3) {
            console.log('Gebruiker heeft gewonnen.')
            process.exit();
        } else {
            console.log('Computer heeft gewonnen.')
            process.exit();
        }
    } else {
        await keuze(user, computer)
    }
}

process.exit();