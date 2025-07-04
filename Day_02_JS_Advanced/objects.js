//------------------------------------------- ARRAY DESTRUCTURING ---------------------------------------------------//
const names = [" Alyaa ", " Yasmine ", " Maryam ", " Menna "];
const [n1, n2, n3, n4, n5 = "sara"] = names;
console.log(n1, n2, n3, n4, n5); // n5- undefined the best solution give it value
//------------------- Skiping elements ---------------//
const [, , name3] = names;
console.log(name3);
//---------------------- rest -----------------------//
const [name1, , ...rest] = names; // (...) put all the rest elements in this var
console.log(rest);
//---------------------- function ------------------//
function getLanguages() {
    return ["C++", "JS", "Java", "Python"];
}
const [language1, ...restLang] = getLanguages();
console.log(language1);
console.log(restLang);
//---------------------- Swaping Variable -------------//
let a = 5;
let b = 10;
[b, a] = [a, b];
console.log(a);
console.log(b);
//------------------------------------------- OBJECT DESTRUCTURING ---------------------------------------------------//
const user = {
    name: "Alyaa",
    email: "alyaa@exm.com",
    age: 21,
    address: "Cairo",
    sayHello: () => {
        console.log("Hi! I'm Alyaa");
    }, // arrow fun
};
// console.log(user.name);
// console.log(user.email);
// console.log(user.age);
// user.sayHello();
//-------------- DESTRUCTURING -----------//
const { name, email, age, address } = user;
console.log("User Name is:", name);
console.log("User Email is:", email);
console.log("User Age is:", age);
console.log("User Address is : " + address);
//--- if u wanna assign new variables ---//
const { name: userName, email: userMail, age: userAge, address:userAddress="giza" } = user;
console.log("User Name is : " + userName);
console.log("User Email is : " + userMail);
console.log("User Age is : " + userAge);
console.log("User Address is : " + userAddress);
//---------------------------------------------- JSON ----------------------------------------//
/*
Syntax
Data is written inside curly braces { }.

Data consists of key-value pairs.

Keys and values are separated by a colon : (e.g., "Key" : "Value").

Keys must be wrapped in double quotes (e.g., "Key").

Multiple key-value pairs are separated by commas , (e.g., { "Key" : "Value", "Key2" : "Value2" }).

JSON can be written in a single line or multiple lines, depending on readability.

Square brackets [ ] are used for arrays.

Curly braces { } are used for objects.
 */
// convert to json
const MyJsonString = JSON.stringify(user);
console.log("JSON String:", MyJsonString);
// convert to Object
const parsedUser = JSON.parse(MyJsonString);
console.log("Parsed User:", parsedUser);

console.log("Parsed Name:", parsedUser.name);