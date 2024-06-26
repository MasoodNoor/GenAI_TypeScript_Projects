import inquirer from "inquirer";
import chalk from "chalk";

interface TodoList{
    task: string;
    completed: boolean;
}
console.log(chalk.bgBlue.white.bold("\n\tWelcome GenAI TodoList \n"));

let todoList: TodoList[] = [];

async function mainMenu() {
    
    const { action } = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [ "Add task", "View all tasks", "Edit task", "Completed task", "Delete task", "Cancel" ]
        
    });    
    switch (action) {
        case `Add task`:
            await addtask();
            break;
        case `View all tasks`:
            await viewalltasks();
            break;
        case `Edit task`:
            await edittask();
            break;
        case `Completed task`:
            await completetask();
            break;
        case `Delete task`:
            await deletetask();
            break;
        case `Cancel`:
            console.log("Thank you, See you soon");
            return;
    }
    let { reRunTask } = await inquirer.prompt({
        name:'reRunTask',
        type: 'confirm',
        message: 'Would you like to continue?'
    }) 
    
    switch (reRunTask) {
        case true:
            mainMenu();
            break;
        
        case false:
            console.log("Thank you, See you soon");
            break;
    
    }
    
}


let addtask = async () => { 
    let { task } = await inquirer.prompt({
        name: 'task',
        type: 'input',
        message: 'What would you like to add?'
    });
    todoList.push({
        task: task,
        completed: false
    });
    console.log(`The following task ${chalk.green.bold(task)} has added in your ToDo list.`);
}
let viewalltasks = () => {
    console.log(`${chalk.bold.yellow("***************")}${chalk.bold.greenBright("TODO LIST")}${chalk.bold.yellow("***************")}`);
    todoList.forEach((item, index) => {
        console.log(`\t${index + 1}.[${item.completed ? '✅' : '⭕'}] ${item.task}`);    
    }); 
    console.log(`${chalk.bold.yellow("***************************************")}`);
    
 }
let edittask = async () => {
    viewalltasks();
    let { index } = await inquirer.prompt({
        name: 'index',
        type: 'number',
        message: 'Which task would you like to edit?'
    });
    if (index < 1 || index > todoList.length) {
        console.log("Task number is invalid. Please try again");
        return;
    }
    const { updatedTask } = await inquirer.prompt({
        name: 'updatedTask',
        type: 'input',
        message: 'Enter the updated task:',
    });
       
    let newUpdatedTask = todoList[index - 1].task = updatedTask
    console.log(`The ${chalk.green.bold(newUpdatedTask)} task has been updated`);
    
 }

let completetask = async () => {
    viewalltasks();
    let { index } = await inquirer.prompt({
        name: 'index',
        type: 'number',
        message: 'Which task would you like to complete?'
    });
    if (index < 1 || index > todoList.length) {
        console.log("Task number is invalid. Please try again");
        return;
    }
    todoList[index - 1].completed = true;
    console.log("Task completed");
    

    
    // todoList[index].completed = true;
    // console.log(`${todoList[index].task}, completed`);
} 

let deletetask = async () => {

    viewalltasks();
    let { deleteTaskIndex } = await inquirer.prompt({
      name: 'deleteTaskIndex',
      type: 'number',
      message: 'Enter the index number of the task to delete:',
    });
  
    if (deleteTaskIndex < 1 || deleteTaskIndex > todoList.length) {
      console.log("Please enter a valid task number.");
      return;
    }
  
    let deletedTask = todoList.splice(deleteTaskIndex - 1, 1)[0]; // Remove and return the deleted element
    console.log(`The following task ${chalk.red.strikethrough(deletedTask.task)} has been removed from your ToDo list.`);
  
}


mainMenu();
