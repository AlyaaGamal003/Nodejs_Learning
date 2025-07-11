//Write a script to create and read a text file using fs module.
import fs from 'fs';

//----- Write in Text File -----//
// fs.writeFile('Day_04_Node_Basics/Data.txt','Alyaa Gamal',(err)=>{
//     if (err) throw err;
//     console.log("Data is added");
// })

//----- Append data in Text File -----//
fs.appendFile("Day_04_Node_Basics/Data.txt"," a computer science student",(err)=>{
    if (err) throw err;
    console.log("Data is appended");
})

//----- Read Text File -----//
fs.readFile('Day_04_Node_Basics/Data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//------------------- Rename Text File -----------------//
fs.rename('Day_04_Node_Basics/Data.txt', 'Day_04_Node_Basics/Data2.txt', (err) => {
    if (err) throw err;
    console.log("File renamed Successfully");
});