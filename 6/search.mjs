import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"]
let zoekNaam = await userInput.question('Geef de naam die je zoekt: ');

function search (namen, zoekNaam) {
    for (let i = 0; i < namen.length; i++) {
        if (namen[i] == zoekNaam) {
            console.log(i + 1);
            break;
        } else if (namen[i] != zoekNaam && i == namen.length - 1) {
            console.log(-1);
        }
    }
}

search(namen, zoekNaam);

process.exit();