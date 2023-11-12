import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let winnendeCijfers = [1, 8, 20, 4, 26, 24];
let cijfers = [];

async function cijfersUser() {
    for (let i = 0; i < 6; i++) {
        let temp = parseFloat(await userInput.question("Geef een cijfer: "));
        cijfers.push(temp + " ");
    }
    printCijfersUser(cijfers);
    return cijfers;
}

function printCijfersUser(cijfers) {
    let rij = "";
    for (let i = 0; i < cijfers.length; i++) {
        rij += cijfers[i] + " ";
    }
    console.log(rij);
}

await cijfersUser();

let aantaljuist = 0;

for (let i = 0; i < cijfers.length; i++) {
    for (let j = 0; j < winnendeCijfers.length; j++) {
        if (cijfers[i] == winnendeCijfers[j]) {
            aantaljuist++;
        }
    }
}
switch (aantaljuist) {
    case 6:
        console.log("Je hebt alle getallen goed! Jackpot!");
        break;
    case 5:
        console.log("Je hebt 5 getallen goed! Net geen hoofdprijs!");
        break;
    case 4:
    case 3:
        console.log("Je hebt " + aantaljuist + " getallen goed!");
        break;
    case 2:
    case 1:
    case 0:
        console.log(
            "Je hebt slechts " + aantaljuist + " getallen goed! Volgende keer beter!"
        );
}

console.log('De juiste getallen waren: ' + winnendeCijfers);

process.exit();
