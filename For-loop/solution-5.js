// Create a function to go through a 2D array, with for loop and return a value. This value is sum of all numbers in the array.

// Create an array 'a' that has values [[5,10,15], [5,10], [5,10,15]]
let a = [
  [5, 10, 15],
  [5, 10],
  [5, 10, 15],
];
// Create a variable 'answer', no value assigned.
let answer;
// Create a function sumArray() that takes 1 input 'array', outputs the value of 'sum'.
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}
answer = sumArray(a);
console.log(answer);
// Inside sumArray(), declare variable 'sum' and assign value 0.
// Create a for loop inside sumArray()
// Create initialization: let i = 0
// Create condition: i < array.length
// Create final-expression: i++
// Create a statement with another loop nested in.
// Create a statement in nested loop to sum all elements in the array.
// Call the function sumArray() with array 'a' as its argument and assign its output to 'answer'
// Log 'answer' to the console.
// 75 is expected to be logged.
