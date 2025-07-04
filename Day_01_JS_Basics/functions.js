//----------------------------------- First Function -----------------------------------//
const num = 10;
// function EvenOrOdd(num) {
//     if (num % 2 == 0)
//         console.log("Number is Even");
//     else
//         console.log("Number is Odd");
// }
// EvenOrOdd(num);

//------- arrow function --------//

const EvenOrOdd=(num)=> {
    if (num % 2 == 0)
        console.log("Number is Even");
    else
        console.log("Number is Odd");
}
EvenOrOdd(num);

//-------------------------------- Second Function -----------------------------------//

const a = 10;
const b = 20;
// function MaxNumber(a, b) {
//     if (a > b)
//         console.log("First number is the max number");
//     else
//         console.log("Second number is the max number");
// }
// MaxNumber(a, b);

//------- arrow function --------//
const MaxNumber=(a,b) => {
    if (a > b)
        console.log("First number is the max number");
    else
        console.log("Second number is the max number");
}
MaxNumber(a, b);

//----------------------------------- Third Function -------------------------------//
// const age=21;
// function checkAge(age) {
//   if (age >= 18) {
//     console.log("You are an adult.");
//   } else {
//     console.log("You are a minor.");
//   }
// }
// checkAge(age);

//------- arrow function --------//
const age = 21;
const checkAge = (age) => {
    if (age >= 18) {
        console.log("You are an adult.");
    } else {
        console.log("You are a minor.");
    }
}
checkAge(age);