#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
console.log(chalk.bgBlue.bold.white("\t WELCOME TO NUMBER GUESSING GAME\t\t\n"));
let answer = await inquirer.prompt([
    {
        name: "userRandomNumber",
        type: "number",
        message: "\tEnter a number between 1 and 10 \n\tEnter your number:"
    }
]);
if (randomNumber == answer.userRandomNumber) {
    const myNeon = chalkAnimation.neon(`\t${chalk.bold("BRAVO!!!")} You got it!`);
    setTimeout(() => {
        myNeon.stop(); // Animation stops
    }, 5000);
}
else {
    const myNeon = chalkAnimation.neon(`\t${chalk.bold("OOPS!!!")} Wrong number! \t TRY AGAIN🤪`);
    setTimeout(() => {
        myNeon.stop(); // Animation stops
    }, 5000);
}
