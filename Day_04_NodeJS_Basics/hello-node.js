// Create a script that logs “Hello, Node.js!” and uses setTimeout, setInterval .

console.log("Hello, Node.js!");

setTimeout(() => {
  console.log("⏰ This message is shown after 2 seconds");
}, 2000);

const interval = setInterval(() => {
  console.log("🔁 This message repeats every 1 second");
}, 1000);

setTimeout(() => {
  clearInterval(interval);
  console.log("🛑 Interval stopped after 5 seconds");
}, 5000);