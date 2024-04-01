#! usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import { clear } from "console";

console.clear();

console.log(chalk.white.bgBlue.bold('\t\tWELCOME TO GENAI ATM MACHINE\t\t')) 
console.log("Please sign up for withdrawal");




   
let userDetalis = await inquirer.prompt(
    [
        {
            name: "userName",
            type: "String",
            message: "Please enter your name"
        
        },
        {
            name: "userPin",
            type: "number",
            message: "Please enter your pin"
        },
                
    ]
);

const pinNumber: number = userDetalis.userPin
const userNameSave: string = userDetalis.userName
let userBalance: number = 20000

console.log("Thank you signing up, Please enter your details for withdrawal")
console.log(`Your name ${userNameSave} and your password ${pinNumber}`);

let userId = await inquirer.prompt(
    [
        {
            name: "userNameId",
            type: "String",
            message: "Please enter your name"
        },
        {
            name: "userPinId",
            type: "number",
            message: "Please enter your pin"
        }
    ]
)

if (userNameSave == userId.userNameId && pinNumber == userId.userPinId) {
    console.log("You have logged in successfully");
    let accountDeatils = await inquirer.prompt(
        [
            {
                name: "accountType",
                type: "list",
                message: "Please select your account type",
                choices: ["Savings", "Current"]
            
            }
        ]
    )
    
}
else {
    console.log("You have entered wrong credentials");
 }