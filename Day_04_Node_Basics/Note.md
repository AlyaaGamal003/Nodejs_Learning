## **Node.js REPL**

>[!note]-  What is the Node.js REPL
>Node.js comes with a built-in REPL (Read-Eval-Print Loop) environment that allows you to execute JavaScript code interactively. The REPL is accessible through the terminal and is a great way to test out small pieces of code.


>[!note]- **Note:** 
>`REPL` stands for Read Evaluate Print Loop, and it is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution. The REPL session provides a convenient way to quickly test simple JavaScript code.

### **Dot commands**

The REPL has some special commands, all starting with a dot `.`. They are

- `.help`: shows the dot commands help
- `.editor`: enables editor mode, to write multiline JavaScript code with ease. Once you are in this mode, enter ctrl-D to run the code you wrote.
- `.break`: when inputting a multi-line expression, entering the .break command will abort further input. Same as pressing ctrl-C.
- `.clear`: resets the REPL context to an empty object and clears any multi-line expression currently being input.
- `.load`: loads a JavaScript file, relative to the current working directory
- `.save`: saves all you entered in the REPL session to a file (specify the filename)
- `.exit`: exits the repl (same as pressing ctrl-C two times)

---
## **JavaScript Timing Events**

>[!note]-  setTimeout(function, milliseconds)  
>Executes a function, after waiting a specified number of milliseconds.
>

>[!note]- setInterval(function, milliseconds)  
>Same as setTimeout(), but repeats the execution of the function continuously.

>[!note]- clearTimeout
>Cancels a `setTimeout` before it executes.

>[!note]- clearInterval
>Stops a repeating action initiated by `setInterval`.

---
## **Node.js architecture (event loop, non-blocking I/O)**

### What is Node.js?

Node.js is a **runtime environment** that allows you to run JavaScript **outside the browser**, typically on the server.

>[!note]- what's really special about Node.js?
 🚀 It uses a **single-threaded, non-blocking, event-driven architecture** — which makes it **fast** and **efficient**, especially for I/O-heavy operations.

### 🧠 Core Concepts

#### **1. Single Threaded**

- Node.js uses **one thread** to handle **many client requests**.
- But how does it handle multiple things at once? That’s where the **event loop** and **non-blocking I/O** come in.
#### **2. Non-blocking I/O**

Normal (blocking) code:

```js
const data = fs.readFileSync('file.txt'); // blocks everything else
```

Node.js (non-blocking):

``` js
fs.readFile('file.txt', (err, data) => {
  console.log('File read!');
});
```

✅ It does **not wait** for the file to be read. Instead:

- It registers a **callback**.
- The rest of the program **keeps running**.
- When the file is ready, the callback runs.

#### **3. Event Loop in Node.js**

> The **event loop** in Node.js is a fundamental mechanism that allows Node.js to perform non-blocking I/O operations despite using a single JavaScript thread. This is achieved by offloading operations to the system kernel whenever possible

>[!note]- How the Event Loop Works
When Node.js starts, it initializes the event loop, processes the provided input script, which may make asynchronous API calls, schedule timers, or call _process.nextTick()_, and then begins processing the event loop. The event loop consists of several phases, each handling specific tasks

This Tasks :
1. **Timers**: Executes callbacks scheduled by _setTimeout()_ and _setInterval()_.
2. **Pending Callbacks**: Executes I/O callbacks deferred to the next loop iteration.
3. **Idle, Prepare**: Used internally only.
4. **Poll**: Retrieves new I/O events and executes I/O-related callbacks.
5. **Check**: Executes _setImmediate()_ callbacks.
6. **Close Callbacks**: Executes callbacks for closed sockets

---
## **Built-in Modules**

### Path Module
#### Path Methods
```js
const path =require("node:path");
console.log(__dirname);   // path of the directory
console.log(__filename); // path of the file

console.log(path.basename(__dirname));  // directory name
console.log(path.basename(__filename)); // file name

console.log(path.extname(__dirname));   // directory extension
console.log(path.extname(__filename));  // file extension

console.log(path.parse(__filename));   // info about the file
console.log(path.format(path.parse(__filename))); // info in path format

console.log(path.isAbsolute(__filename));    //true if the file is existing
console.log(path.isAbsolute("./data.json"));

// join handles slashes (`/`, `\`), removes any `..` or extra slashes
// gives you a valid path string
const fullPath = path.join('folder', 'subfolder', 'file.txt');
console.log(fullPath);  // folder\subfolder\file.txt

console.log(path.resolve('folder', 'subfolder', 'file.txt'));
// F:\Projects\Back-End\JS\folder\subfolder\file.txt ==> output
```

### FS Module

>[!note]- Working with the File System (fs) Module
The fs module allows you to interact with the file system to read, write, and manage files and directories

```js
const fs = require('fs');

//----- Read Text File -----//
fs.readFile('Day_04_Node_Basics/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//----- Write in Text File -----//
fs.writeFile('Day_04_Node_Basics/example.txt','Alyaa Gamal',(err)=>{
    if (err) throw err;
    console.log("Data is added");
})

//----- Append data in Text File -----//
fs.appendFile("Day_04_Node_Basics/example.txt"," a computer science student",(err)=>{
    if (err) throw err;
    console.log("Data is appended");
})

//----- Deleting Files -----//
fs.unlink("Day_04_Node_Basics/example.txt",(err)=>{
    if (err) throw err;
    console.log("File is Deleted");
})

//------------------- Rename Text File -----------------//
fs.rename('Day_04_Node_Basics/Data.txt', 'Day_04_Node_Basics/Data2.txt', (err) => {
    if (err) throw err;
    console.log("File renamed Successfully");
});
```

---
