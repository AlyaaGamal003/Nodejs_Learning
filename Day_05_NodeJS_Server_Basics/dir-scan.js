import fs from "fs";
import path from "path";

//------------------- Create Folder & File inside it -----------------------//
fs.mkdir("Day_05_Node_Basics/Tutorial", (err) => {
  if (err) throw err;
  else {
    fs.writeFile(
      "Day_05_Node_Basics/Tutorial/Data.txt",
      "Hi, I'm Alyaa",
      (err) => {
        if (err) throw err;
        console.log("Folder and File Both Successfully Created");
      }
    );
  }
});

// Write a script to read a directory, filter .txt files, and log their names.
fs.readdir('Day_05_Node_Basics/Tutorial', (err, files) => {
  if (err) throw err;
  for (let file of files) {    // use of to loop on files
    let ext = path.extname(file);
    if (ext === '.txt') {
      console.log(file);
    }
  }
});

