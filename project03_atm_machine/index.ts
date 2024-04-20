import chalk from "chalk";
import inquirer from "inquirer";
import ListPrompt from "inquirer/lib/prompts/list.js";

console.clear();

console.log(chalk.white.bgBlue.bold("\t\tWELCOME TO GENAI ATM MACHINE\t\t"));

console.log("Please register for new account");
var userDetalis = await inquirer.prompt([
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
console.log(
  `Your name ${userDetalis.userName} and your password ${userDetalis.userPin}`
);

var userChoice = await inquirer.prompt([
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

  var userBalance: number = 30000;
    if (
        userDetalis.userName == userId.userNameId &&
        userDetalis.userPin == userId.userPinId
    ) {
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
                } else if (withdrawal.amount < 500) {
                    console.log("Please enter a valid amount");
                    console.log("Amount must not be less than 500");
                } else {
                    console.log("You have withdrawn " + withdrawal.amount);
                    userBalance -= withdrawal.amount;
                    console.log("Your new balance is " + userBalance);
                    break;
                }
            } else if (userAccount.action == "Quick Withdrawal") {
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
                } else {
                    console.log("You have withdrawn " + quickWithdrawal.quickamount);
                    userBalance -= quickWithdrawal.quickamount;
                    console.log("Your new balance is " + userBalance);
                    break;
                }
            } else if (userAccount.action == "Balance Inquiry") {
                console.log(`Your current balance is: ${userBalance}`);
                break;
            } else if (userAccount.action == "Cancel") {
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
        ])
        if (userReceipt.receipt == "Yes") {
            console.clear
            console.log(`${chalk.bold.bgWhite("--------------------------------")}`)
            console.log();
            console.log();
            console.log(`${chalk.bold.bgWhite("--------------------------------")}`)
          
        } else if (userReceipt.receipt == "No") {
            console.log("Thank you, See you soon");
        }
  } else {
    console.log("You have entered wrong credentials");
  }
} else if (userChoice.action == "Cancel") {
  console.log("Thank you, See you soon");
}
