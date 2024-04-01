import chalk from "chalk";
import inquirer from "inquirer";
console.clear();
console.log(chalk.white.bgBlue.bold('\t\tWELCOME TO GENAI ATM MACHINE\t\t'));
// while (true) {
console.log("Please register for new account");
var userDetalis = await inquirer.prompt([
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
]);
console.log("Thank you signing up, Please enter your details for withdrawal");
console.log(`Your name ${userDetalis.userName} and your password ${userDetalis.userPin}`);
var userChoice = await inquirer.prompt([{
        name: "action",
        type: "list",
        message: "Do you want to continue?",
        choices: ["Login", "Cancel"],
    }]);
if (userChoice.action == "Login") {
    console.clear();
    let userId = await inquirer.prompt([
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
    ]);
    var userBalance = 30000;
    if (userDetalis.userName == userId.userNameId && userDetalis.userPin == userId.userPinId) {
        console.log("You have logged in successfully");
        let accountDeatils = await inquirer.prompt([
            {
                name: "accountType",
                type: "list",
                message: "Please select your account type",
                choices: ["Savings", "Current"]
            }
        ]);
        let userAccount = await inquirer.prompt([{
                name: "action",
                type: "list",
                message: "What you want to do today?",
                choices: ["Withdrawal", "Quick Withdrawal", "Cancel"],
            }]);
        if (userAccount.action == "Withdrawal") {
            console.clear();
            let withdrawal = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "Please enter the amount you want to withdraw",
                }]);
            if (withdrawal.amount > userBalance) {
                console.log("You have insufficient balance");
            }
            else {
                console.log("You have withdrawn " + withdrawal.amount);
                userBalance -= withdrawal.amount;
                console.log("Your new balance is " + userBalance);
            }
        }
        else if (userAccount.action == "Quick Withdrawal") {
            console.clear();
            let withdrawal = await inquirer.prompt([{
                    name: "amount",
                    type: "list",
                    message: "Please enter the amount you want to withdraw",
                    choices: ["5000", "10000", "15000", "20000", "25000"]
                }]);
            if (withdrawal.amount > userBalance) {
                console.log("You have insufficient balance");
            }
            else {
                console.log("You have withdrawn " + withdrawal.amount);
                userBalance -= withdrawal.amount;
                console.log("Your new balance is " + userBalance);
            }
        }
        else if (userChoice.action == "Cancel") {
            console.log("Thank you, See you soon");
        }
        else {
            console.log("You have entered wrong credentials");
        }
    }
    else if (userChoice.action == "Cancel") {
        console.log("Thank you, See you soon");
    }
}
