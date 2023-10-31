import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let gebruikerWins = 0;
let computerWins = 0;

while (gebruikerWins < 3 && computerWins < 3) {
    const options = ["schaar", "steen", "papier"];
    const computerChoice = options[Math.floor(Math.random() * 3)];

    let gebruikerKeuze = await userInput.question('schaar/steen/papier? ');

    if (gebruikerKeuze == computerChoice) {
        console.log('Het is gelijkspel');
        console.log('');
    } else if ((gebruikerKeuze == 'schaar' && computerChoice == 'papier') || 
                (gebruikerKeuze == 'steen' && computerChoice == 'schaar') ||
                (gebruikerKeuze == 'papier' && computerChoice == 'steen')) {
                    console.log('De gebruiker wint!')
                    gebruikerWins++;
                    console.log(gebruikerWins + ' - ' + computerWins);
                    console.log('');
    } else {
        console.log('De computer wint!');
        computerWins++;
        console.log(gebruikerWins + ' - ' + computerWins);
        console.log('');
    }
}

if (gebruikerWins == 3) {
    console.log('De gebruiker heeft het spel gewonnen!');
} else {
    console.log('De computer heeft het spel gewonnen!')
}

process.exit();