import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const userInput = readline.createInterface({ input, output });

let studentenlijst = [];
let student;

while (student != 'S') {
    student = await userInput.question('naam van student: ');
    studentenlijst.push(student);
}
studentenlijst.pop();

console.log();

for (let i = 0; i < studentenlijst.length; i++) {
    console.log(`${studentenlijst[i]} is uitgenodigd!`);
}


process.exit();
