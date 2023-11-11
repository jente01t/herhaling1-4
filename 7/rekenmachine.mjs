import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let rekenmachine = {
    voegToe: function(a, b) {
        return a + b;
    },
    vermenigvuldig: function(a, b) {
      return a * b;
    }
};

let som = rekenmachine.voegToe(2, 2);

console.log(som)

process.exit();