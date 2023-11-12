import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

const personen = [
    { naam: "Jan", leeftijd: 30 },
    { naam: "Sophie", leeftijd: 22 },
    { naam: "Lucas", leeftijd: 28 },
    { naam: "Lisa", leeftijd: 35 },
  ];

if (personen.leeftijd > 25) {
    console.log(personen.naam);
}








// if (object1 == object2) {
//     console.log('Ze zijn gelijk');
// } else if (object1.naam == object2.naam) {
//     console.log('De namen zijn gelijk.');
// } else if (object1.leeftijd == object2.leeftijd) {
//     console.log('De leeftijden zijn gelijk.');
// } else {
//     console.log('Ze zijn niet gelijk.');
// }

process.exit();