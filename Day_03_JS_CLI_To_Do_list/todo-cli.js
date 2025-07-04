import readline from 'readline';    // library from node.js to interact with users
import { readFile, writeFile } from 'fs/promises';      // to read and write files using async/await 

const FILE_PATH = 'Day_03_JS/tasks.json';      // file we will read from

// It prepares the interface that asks the user questions and receives his answers.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//--------------------------------------------------  Load tasks  ---------------------------------------------//
async function loadTasks() {
    try {
        const data = await readFile(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch {
        return []; 
    }
}
//----------------------------------------------   Save tasks  ---------------------------------------------//
async function saveTasks(tasks) {
    try {
        await writeFile(FILE_PATH, JSON.stringify(tasks, null, 2));  //  null, 2 to make a 2 space in json file 
    } catch (err) {
        console.error("Error saving:", err.message);
    }
}

//--------------------------------------------  Show menu using ----------------------------------------//
function showMenuText() {
    console.log("\n📝 TO-DO CLI");
    console.log("Choose one option please!");
    const lists = ["View Tasks", "Add Task", "Delete Task", "Exit"];
    let index = 1;
    lists.forEach(list => {
        console.log(index, ")", list);
        index = index + 1;
    });
}
//-------------------------------------  View tasks  -----------------------------------------------//
async function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log("\n📭 No tasks yet.");
    } else {
        console.log("\n📋 Your Tasks:");
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.text}`);
        });
    }
}

//-----------------------------------  Add task  ------------------------------------------------//
async function addTask(tasks) {
    rl.question("Enter new task: ", async (input) => {
        if (input.trim() === '') {
            console.log("Task cannot be empty.");
        } else {
            tasks.push({ text: input.trim() });
            await saveTasks(tasks);
            console.log("Task added.");
        }
        showMenu(tasks);
    });
}

//---------------------------------------  Delete task  -------------------------------------------//
async function deleteTask(tasks) {
    rl.question("Enter task number to delete: ", async (num) => {
        const index = parseInt(num) - 1;
        if (isNaN(index) || index < 0 || index >= tasks.length) {   // isNaN is a built=in function to check if the input is number (MDN)
            console.log("Enter a valid number Please.");
        } else {
            const removed = tasks.splice(index, 1); // Remove 1 item at position = index
            await saveTasks(tasks);
            console.log(`Deleted: ${removed[0].text}`);
        }
        showMenu(tasks);
    });
}

//----------------------------------- Show menu and handle user input  ----------------------------//
function showMenu(tasks) {
    showMenuText(); 
    rl.question("\nEnter your choice: ", async (choice) => {
        switch (choice) {
            case '1':
                await viewTasks(tasks);
                showMenu(tasks);
                break;
            case '2':
                await addTask(tasks);
                break;
            case '3':
                await deleteTask(tasks);
                break;
            case '4':
                console.log("👋 Bye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice.");
                showMenu(tasks);
        }
    });
}

//-----------------------------------------------  Start  --------------------------------------------//
(async () => {
    const tasks = await loadTasks();
    showMenu(tasks);
})();
