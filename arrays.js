let languages = ["Java", "JS", "C++", "C#"];

// Loop 1: for loop
for (let i = 0; i < languages.length; i++) {
  console.log("Languages is :", languages[i]);
}

// Loop 2: forEach
languages.forEach((language) => {
  console.log("My Fav languages is :", language);
});

// Array 1: Filter
const numbers = [3, 12, 5, 18, 7, 30, 10];
const greaterThan10 = numbers.filter((num) => num > 10); // array of elements that meet the condition
console.log("Numbers greater than 10:", greaterThan10);

// Array 2: Map
const doubled = numbers.map((num) => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// Array 3: Reduce
const total = numbers.reduce((sum, current) => sum + current, 0);
console.log(total);
