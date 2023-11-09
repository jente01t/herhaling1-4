import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Welkom bij de await quiz! Beantwoord de volgende 5 vragen:')
let correct = 0;

let vraag = 1;
console.log('Vraag 1: Wat is de hoofdstad van Frankrijk? ');
await quiz();

vraag = 2;
console.log('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel? ');
await quiz();

vraag = 3;
console.log('Vraag 3: Wat is het grootste zoogdier ter wereld?');
await quiz();

vraag = 4;
console.log('Vraag 4: Wie schreef het toneelstuk \'Romeo en Julia\'?');
await quiz();

vraag = 5;
console.log('Vraag 5: Hoeveel poten heeft een spin?');
await quiz();


async function quiz () {
    let antwoord = await userInput.question('Jouw antwoord: ');
    if (vraag == 1) {
        if (antwoord == 'Parijs') {
            console.log('Goed antwoord!')
            console.log('')
            correct++;
        } else {
            console.log('Fout antwoord. Het goede antwoord is: Parijs')
            console.log('')
        }
    } else if (vraag == 2) {
        if (antwoord == '8') {
            console.log('Goed antwoord!')
            console.log('')
            correct++;
        } else {
            console.log('Fout antwoord. Het goede antwoord is: 8')
            console.log('')
        }
    } else if (vraag == 3){
        if (antwoord == 'blauwe vinvis') {
            console.log('Goed antwoord!')
            console.log('')
            correct++;
        } else {
            console.log('Fout antwoord. Het goede antwoord is: blauwe vinvis')
            console.log('')
        }
    } else if (vraag == 4){
        if (antwoord == 'William Shakespeare') {
            console.log('Goed antwoord!')
            console.log('')
            correct++;
        } else {
            console.log('Fout antwoord. Het goede antwoord is: William Shakespeare')
            console.log('')
        }
    } else if (vraag == 5){
        if (antwoord == '8') {
            console.log('Goed antwoord!')
            console.log('')
            correct++;
        } else {
            console.log('Fout antwoord. Het goede antwoord is: 8')
            console.log('')
        }
    }
}

console.log('Je hebt ' + correct + ' van de 5 vragen goed beantwoord!');

process.exit();