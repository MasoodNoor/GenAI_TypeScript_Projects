import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
async function mainMenu() {
    const { action } = await inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: ["Add task", "View all tasks", "Edit task", "Completed task", "Delete task", "Cancel"]
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
    mainMenu();
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
};
let viewalltasks = () => {
    console.log(`***************TODO LIST****************`);
    todoList.forEach((item, index) => {
        console.log(`\t${index + 1}.[${item.completed ? '✅' : '⭕'}] ${item.task}`);
    });
    console.log(`****************************************`);
};
let edittask = async () => { };
let completetask = async () => {
    viewalltasks();
    let { index } = await inquirer.prompt({
        name: 'index',
        type: 'number',
        message: 'Which task would you like to complete?'
    });
    if (index < 1 || index > todoList.length) {
        console.log("Please try again");
        return;
    }
    todoList[index - 1].completed = true;
    console.log("Task completed");
    // todoList[index].completed = true;
    // console.log(`${todoList[index].task}, completed`);
};
async function deletetask() {
    viewalltasks();
    const { deleteTaskIndex } = await inquirer.prompt({
        name: 'deleteTaskIndex',
        type: 'number',
        message: 'Enter the index number of the task to delete:',
    });
    if (deleteTaskIndex < 1 || deleteTaskIndex > todoList.length) {
        console.log("Please enter a valid task number.");
        return;
    }
    const deletedTask = todoList.splice(deleteTaskIndex - 1, 1)[0]; // Remove and return the deleted element
    console.log(`The following task ${chalk.red.strikethrough(deletedTask.task)} has been removed from your ToDo list.`);
}
mainMenu();
