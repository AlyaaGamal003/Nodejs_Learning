/*Synchronous Code
Executes line by line in a sequential manner.
Each operation must complete before moving to the next.*/

/*Asynchronous Code
Allows multiple operations to run concurrently without waiting.
Does not block the execution flow (e.g., I/O operations, network requests, or fetching data).

Handled using:
1) Callbacks
2) Promises
3) Async/Await */

/*Callback Hell
A situation where multiple nested callbacks make the code hard to read and maintain.
Occurs when handling asynchronous operations using only callbacks, leading to deeply indented "pyramid-shaped" code.
solution use Promises and Async/Await */

function task1(Callback) {
    setTimeout(() => {
        console.log("task1");
        Callback();
    }, 2000);         // to make fun async

}
function task2(Callback) {
    setTimeout(() => {
        console.log("task2");
        Callback();
    }, 1000);
}
function task3(Callback) {
    setTimeout(() => {
        console.log("task3");
        Callback();
    }, 3000);
}
function task4(Callback) {
    setTimeout(() => {
        console.log("task4");
        Callback();
    }, 1500);
}
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log("all tasks are completed");
//             });
//         });
//     });
// });
//-----------------------------------------Promise--------------------------------//
/*
An object that wraps around asynchronous code and represents its eventual completion (or failure).
Purpose: Handles async tasks like API calls, file operations, or timers more cleanly than callbacks.

States:

1) PENDING → Initial state (operation not completed).
2) RESOLVED (Fulfilled) → Operation succeeded (.then() runs).
3) REJECTED → Operation failed (.catch() runs).
*/

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("You walk the dog 🐕");
            }
            else {
                reject("You didn't walk the dog 🐕");
            }

        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                resolve("You clean the kitchen ✔️");
            }
            else {
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false;
            if (trashTakenOut) {
                resolve("You take out the trash 🗑️");
            }
            else {
                reject("You didn't take out the trash 🗑️")
            }

        }, 500);
    });
}

// walkDog()
//     .then(value => {
//         console.log(value);  // "You walk the dog 🐕"
//         return cleanKitchen();
//     })
//     .then(value => {
//         console.log(value);  // "You clean the kitchen ✔️"
//         return takeOutTrash();
//     })
//     .then(value => {
//         console.log(value);  // "You take out the trash 🗑️"
//         console.log("You finish all the chores!");
//     })
//     .catch(error => console.error(error));

//-----------------------------------------Async & Await --------------------------------//
/*
Async/Await
async: Makes a function return a Promise.
await: Pauses an async function until a Promise settles (resolves or rejects).

Key Points
1) Write asynchronous code in a synchronous style.
2) async functions handle resolution automatically (no manual resolve/reject).
3) Code after await is queued and runs once the Promise completes.*/


async function doChores() {
   try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);
    
    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);
    
    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);
    
    console.log("You finished all the chores!");
} catch (error) {
    console.error("Chore failed:", error);
}
}
//doChores();


// async.js

// Promise chaining approach
function fetchUsersWithPromises() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
     .then(data => {

        console.log('First user:', data[0]); 
    })
    .catch(error => {
      console.error('Promise error:', error);
    });
}

// Async/await approach
async function fetchUsersWithAsyncAwait() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Async/await version - User count:', data.length);
     console.log('First user:', data[1]); 
    return data; // Return the data for further processing
  } catch (error) {
    console.error('Async/await error:', error);
    throw error; 
  }
}
fetchUsersWithPromises();
fetchUsersWithAsyncAwait();

