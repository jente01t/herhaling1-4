import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Kies een arttiest: ');
console.log('1. Armin van Buuren');
console.log('2. Tiësto');
console.log('3. Charlotte de Witte');
console.log('4. Steve Aoki');
console.log();

let keuze = await userInput.question('Geef je keuze in: ');
console.log();

if (keuze = 1) {
    console.log('Je koos voor \"Armin van Buuren\"');
    console.log('Hij is de artiest achter de hit: On & On')
} else if (keuze = 2) {
    console.log('je koos voor \"Tiesto\"');
    console.log('Hij is de artiest achter de hit: Drifting');
} else if (keuze = 3) {
    console.log('je koos voor \"Charlotte de Witte\"');
    console.log('Hij is de artiest achter de hit: Age Of Love');
} else if (keuze = 4) {
    console.log('je koos voor \"Steve Aoki\"');
    console.log('Hij is de artiest achter de hit: Pursuit of Happiness');
}

process.exit();