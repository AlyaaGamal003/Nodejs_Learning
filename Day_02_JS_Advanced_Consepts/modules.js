/*Error --> An object that is created to represent a problem that occurs often 
            with user input or establishing a connection */

import { validateInput } from './utils.js';
function processInput(value) {
  try {
    const valid = validateInput(value);
    console.log("Valid input:", valid);
  } catch (error) {
    console.error("Validation Error:", error.message);
  }
}

// Test with both valid and invalid inputs
processInput("  Hello World  "); // Valid
processInput("");                // Error
processInput(123);               // Error