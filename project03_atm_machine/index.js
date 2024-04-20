import chalk from "chalk";
import inquirer from "inquirer";
console.clear();
console.log(chalk.white.bgBlue.bold("\t\tWELCOME TO GENAI ATM MACHINE\t\t"));
console.log("Please register a new account in our bank.");
let userBalance = 30000;
let userDetalis = await inquirer.prompt([
    {
        name: "userName",
        type: "String",
        message: "Please enter your name",
    },
    {
        name: "userPin",
        type: "number",
        message: "Please enter your pin",
    },
]);
console.log("Thank you signing up, Please enter your details for withdrawal");
console.log(`Your name ${userDetalis.userName} and your password ${userDetalis.userPin}`);
let userChoice = await inquirer.prompt([
    {
        name: "action",
        type: "list",
        message: "Do you want to continue?",
        choices: ["Login", "Cancel"],
    },
]);
if (userChoice.action == "Login") {
    console.clear();
    let userId = await inquirer.prompt([
        {
            name: "userNameId",
            type: "String",
            message: "Please enter your name",
        },
        {
            name: "userPinId",
            type: "number",
            message: "Please enter your pin",
        },
    ]);
    if (userDetalis.userName == userId.userNameId &&
        userDetalis.userPin == userId.userPinId) {
        console.log("You have logged in successfully");
        let accountDeatils = await inquirer.prompt([
            {
                name: "accountType",
                type: "list",
                message: "Please select your account type",
                choices: ["Savings", "Current"],
            },
        ]);
        while (true) {
            let userAccount = await inquirer.prompt([
                {
                    name: "action",
                    type: "list",
                    message: "What you want to do today?",
                    choices: [
                        "Withdrawal",
                        "Quick Withdrawal",
                        "Balance Inquiry",
                        "Cancel",
                    ],
                },
            ]);
            if (userAccount.action == "Withdrawal") {
                console.clear();
                let withdrawal = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Please enter the amount you want to withdraw",
                    },
                ]);
                if (withdrawal.amount > userBalance) {
                    console.log("You have insufficient balance");
                }
                else if (withdrawal.amount < 500) {
                    console.log("Please enter a valid amount");
                    console.log("Amount must not be less than 500");
                }
                else {
                    console.log("You have withdrawn " + withdrawal.amount);
                    userBalance -= withdrawal.amount;
                    console.log("Your new balance is " + userBalance);
                    break;
                }
            }
            else if (userAccount.action == "Quick Withdrawal") {
                console.clear();
                let quickWithdrawal = await inquirer.prompt([
                    {
                        name: "quickamount",
                        type: "list",
                        message: "Please enter the amount you want to withdraw",
                        choices: [5000, 10000, 15000, 20000, 25000],
                    },
                ]);
                if (quickWithdrawal.quickamount > userBalance) {
                    console.log("You have insufficient balance");
                }
                else {
                    console.log("You have withdrawn " + quickWithdrawal.quickamount);
                    userBalance -= quickWithdrawal.quickamount;
                    console.log("Your new balance is " + userBalance);
                    break;
                }
            }
            else if (userAccount.action == "Balance Inquiry") {
                console.log(`Your current balance is: ${userBalance}`);
                break;
            }
            else if (userAccount.action == "Cancel") {
                console.log("Thank you, See you soon");
                break;
            }
        }
        let userReceipt = await inquirer.prompt([
            {
                name: "receipt",
                type: "list",
                message: `${chalk.bold.bgYellow("Do you want to print your receipt?")}`,
                choices: ["Yes", "No"],
            }
        ]);
        // Date and time functions and formatting
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }); // Example: 04/21/2024
        const formattedTime = currentDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true, // Use 12-hour format (optional)
        }); // Example: 04:39 PM
        // Date and time functions are formatting
        if (userReceipt.receipt == "Yes") {
            console.clear();
            console.log(`${chalk.bold.bgWhite("--------------------------------")}`);
            console.log(`${chalk.gray.bold(`Date: ${formattedDate} Time:${formattedTime}`)}`);
            console.log(`${chalk.gray.bold(`Account number: 00${Math.floor(Math.random() * 50000 + 1)}`)}`);
            console.log(`${chalk.gray.bold(`Customer name: ${chalk.bold(userDetalis.userName)}`)}`);
            console.log(`${chalk.gray.bold(`Available Balance: ${chalk.bold(userBalance)}`)}`);
            console.log(`${chalk.gray.bold(`App Name: ${chalk.bold(`GENAI ATM MACHINE`)}`)}`);
            console.log(`${chalk.bold.bgWhite("--------------------------------")}`);
        }
        else if (userReceipt.receipt == "No") {
            console.log("Thank you, See you soon");
        }
    }
    else {
        console.log("You have entered wrong credentials");
        console.log("Please create a new credentials");
    }
}
else if (userChoice.action == "Cancel") {
    console.log("Thank you, See you soon");
}
