// Write a function to test if a number is greater than or equal to 10, and is an even number. The function returns You found the right number! if two conditions are met.

// Hints: % - remainder.
function testNumber(num) {
  if (num >= 10) {
    if (num % 2 === 0) {
      return "You found the right number!";
    } else {
      return "Number is not an even number.";
    }
  } else {
    return "Number is smaller than 10";
  }
}
const result = testNumber(15);
console.log(result);
// Write a function testNumber().
// testNumber() takes in 1 input num.
// Write 1st condition (num >= 10);
// Write action to return Number is smaller than 10 if 1st condition is false.
// Write 2nd condition (num % 2 === 0);
// Write action return  You found the right number! if 2nd condition is true.
// Write action return Number is not an even number. if 2nd condition is false.
// Assign result to the output of testNumber()
// Log result to the console.
