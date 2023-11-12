import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
const userInput = readline.createInterface({ input, output });

let eindeSpel = false;
let totaleSchade = 0;

function slaDeDraak() {
  if (Math.random() < 0.5) {
    return Math.floor(Math.random() * 5) + 1;
  } else {
    return 0;
  }
}

while (!eindeSpel) {
  const schade = slaDeDraak();
  if (schade === 0) {
    console.log("Je werd verslagen door de draak.");
    eindeSpel = true;
  } else {
    totaleSchade += schade;
    if (totaleSchade >= 4) {
      console.log("Je hebt de draak verslagen!");
      eindeSpel = true;
    }
  }
}

process.exit();