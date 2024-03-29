#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';

console.log(chalk.white.bgBlue('\t\tBASIC CALCULATOR USING TYPESCRIPT\t\t'))

let answers = await inquirer.prompt([
    {
        name: "operator",
        message: "Please select which operation you want to perfrom.",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus", "Exponentiation"],
    
    },
    {
        name: "myVal1",
        message: "Please enter the first number",
        type: "number",
    },
    {
        name: "myVal2",
        message: "Please enter the second number",
        type: "number",
    },
]);
if (answers.operator === "Addition") {
    let myValsum: number = answers.myVal1 + answers.myVal2
    const myKaraoke = chalkAnimation.karaoke(`\tYour Answer : ${answers.myVal1} + ${answers.myVal2} = ${myValsum}`,);
    setTimeout(() => {
        myKaraoke.stop(); // Animation stops
    }, 5000);
} else if (answers.operator === "Subtraction") {
    let myValsub: number = answers.myVal1 - answers.myVal2
    const myKaraoke = chalkAnimation.karaoke(`\tYour Answer : ${answers.myVal1} - ${answers.myVal2} = ${myValsub}`,);
    setTimeout(() => {
        myKaraoke.stop(); // Animation stops
    }, 5000);
} else if (answers.operator === "Multiplication") {
    let myValmul: number = answers.myVal1 * answers.myVal2
    const myKaraoke = chalkAnimation.karaoke(`\tYour Answer : ${answers.myVal1} X ${answers.myVal2} = ${myValmul}`,);
    setTimeout(() => {
        myKaraoke.stop(); // Animation stops
    }, 5000);
} else if (answers.operator === "Division") {
    let myValdiv: number = answers.myVal1 / answers.myVal2
    const myKaraoke = chalkAnimation.karaoke(`\tYour Answer : ${answers.myVal1} ÷ ${answers.myVal2} = ${myValdiv}`,);
    setTimeout(() => {
        myKaraoke.stop(); // Animation stops
    }, 5000);
} else if (answers.operator === "Modulus") {
    let myValMod: number = answers.myVal1 % answers.myVal2
    const myKaraoke = chalkAnimation.karaoke(`\tYour Answer : ${answers.myVal1} % ${answers.myVal2} = ${myValMod}`,);
    setTimeout(() => {
        myKaraoke.stop(); // Animation stops
    }, 5000);
} else if (answers.operator === "Exponentiation") {
    let myValExpo: number = answers.myVal1 ** answers.myVal2
    const myKaraoke = chalkAnimation.karaoke(`\tYour Answer : ${answers.myVal1} ^ ${answers.myVal2} = ${myValExpo}`,);
    setTimeout(() => {
        myKaraoke.stop(); // Animation stops
    }, 5000);
} else {
       console.log("Invalid Operator")   
}
