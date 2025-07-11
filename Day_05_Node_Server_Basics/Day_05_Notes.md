
## The Events Module and EventEmitter Class

>[!Note] Event Definition:
>The `events` module in Node.js provides the `EventEmitter` class, which is fundamental for implementing event-driven programming patterns, often referred to as the "publisher-subscriber" or "observer" pattern.

### EventEmitter Class:

>[!note] **Purpose:** 
>`EventEmitter` allows objects to emit named events and other objects to listen and react to those events. This facilitates asynchronous communication and loose coupling between different parts of an application.

You initialize that using

```js
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
```

#### Example 

```js
const EventEmitter = require('node:events');
const tutorial = require('./tutorial');
const eventEmitter = new EventEmitter();
eventEmitter.on('sum', (num1,num2) => {
  console.log(num1 + num2);
});
eventEmitter.emit('sum',2,4);
```

## Working With File System Module. Creating and Deleting Folders

```js
import fs from "fs";

//------------------- Create Folder -----------------------//
fs.mkdir("Day_05_Node_Basics/Tutorial", (err) => {
  if (err) throw err;
  else {
    console.log("Folder Successfully created");
  }
});

//------------------- Delete Folder -----------------------//
fs.rmdir("Day_05_Node_Basics/Tutorial", (err) => {
  if (err) throw err;
  else {
    console.log("Folder Successfully Deleted");
  }
});

//----------------- Create Folder & File inside it ---------------------//
fs.mkdir("Day_05_Node_Basics/Tutorial", (err) => {
  if (err) throw err;
  else {
    fs.writeFile("Day_05_Node_Basics/Tutorial/Data.txt","Hi, I'm Alyaa",
      (err) => {
        if (err) throw err;
        console.log("Folder and File Both Successfully Created");
      }
    );
  }
});

//------------------ Delete Folder & File inside it ---------------------//

fs.unlink("Day_05_Node_Basics/Tutorial/Data.txt", (err) => {
  if (err) throw err;
  else {
    fs.rmdir("Day_05_Node_Basics/Tutorial", (err) => {
      if (err) throw err;
      else {
        console.log("Folder and File Both Successfully Deleted");
      }
    });
  }
});

//------------------- Show Folder's Files -----------------------//
fs.readdir('Day_05_Node_Basics/Tutorial',(err,files)=>{
    if(err) throw err
    console.log(files);
})
```

>[!note] #### If u wanna delete folder , this folder should be empty

---
## HTTP Module

```js

import http from 'http';

//http.createServer Creates an HTTP server that listens for requests.
const server = http.createServer((req, res) => {
 // Set status code and multiple headers
  res.writeHead(200, {
    'Content-Type': 'text/html',            
    'X-Powered-By': 'Node.js',        
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Set-Cookie': 'sessionid=abc123; HttpOnly'        

  });
  res.end('<h1>Hello, World!</h1>');
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

>[!note] ####  **Request and Response**: The callback function `(req, res)` handles incoming requests and sends responses.

-  **Content-Type': 'text/html' :**
    Tells the browser that the response content is HTML, so it knows how to render it.

- **'X-Powered-By': 'Node.js' :**
    A custom/meta header that shows what technology is powering the backend. Not required, but often used for fun or branding.

- **'Cache-Control': 'no-cache, no-store, must-revalidate' :**
    - This prevents caching:
    - no-cache: Forces browser to revalidate before using cached response.
    - no-store: Tells browsers not to store any part of the response.
    - must-revalidate: Forces revalidation with the server if expired. 

- **'Set-Cookie': 'sessionid=abc123; HttpOnly'**  
    This sets a cookie named sessionid with value abc123