import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let persoon = {
    naam: 'Bard',
    leeftijd: 35,
    geslacht: 'man'
}


persoon.naam = 'Dirk';


persoon.groet = function() {
    return "Hallo, mijn naam is " + this.naam + " en ik ben " + this.leeftijd + " jaar oud.";
  };
  

  console.log(persoon.groet());


function naam (persoon) {
    console.log(persoon.naam);
}

function leeftijdPlus (persoon) {
    persoon.leeftijd ++;
    console.log(persoon.leeftijd);
}




process.exit();