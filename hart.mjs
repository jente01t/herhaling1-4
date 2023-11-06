import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let hoogte = 6
let midden = hoogte/2;

for (let i = midden; i < hoogte; i += 2) {
    let rij = '';
    for (let j = 1; j <= hoogte - i; j += 2) {
        rij += ' ';
    } for (let j = 1; j < i + 1; j++) {
        rij += '*'
    }
    console.log(rij);
}


process.exit();





/*


 ***   ***
***** *****
***********
 *********
  *******
   *****
    ***
     *



   *  *     *  *     
*        *        *  
*                 *  
   *           *     
      *     *        
         *     


*/