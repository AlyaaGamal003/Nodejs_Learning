export function validateInput(input) {
  if (typeof input !== 'string' || input.trim() === '') {
    throw new Error("Invalid input: must be a non-empty string");
  }
  return input.trim();
}