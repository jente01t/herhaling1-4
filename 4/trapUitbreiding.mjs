import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let startTop = false;
let startLeft = false;
let height = 3;

if (startTop && startLeft) {
    for (let i = 1; i <= 3; i++) {
        let rij = '';
        for (let j = 1; j <= i; j++) {
            rij += '*';
        }
        console.log(rij);
    }
}

if (startTop == false && startLeft) {
    for (let i = 3; i > 0; i--) {
        let rij = '';
        for (let j = 1; j <= i; j++) {
            rij += '*';
        }
        console.log(rij);
    }
}

if (startTop == false && startLeft == false) {
    for (let i = 1; i <= 3; i++) {
        let rij = '';
        for (let j = 1; j <= 3 - i; j++) {
            rij += ' ';
        } for (let k = 1; k <= i; k++) {
            rij += '*';
        }
        console.log(rij);
    }
}

console.log()
console.log()
console.log()

for (let i = 1; i <= 3; i++) {
    let rij = '';
    for (let j = 2; j <= i; j++) {
        rij += ' ';
    } for (let k = 1; k <= 4 - i; k++) {
        rij += '*';
    }
    console.log(rij);
}

process.exit();

// ***
//  ** 
//   *