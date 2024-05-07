// Create a function named calculator(), 2 global variables 'a' and 'answer'.
const a = 10;
let answer;
function calculator(num) {
  const b = 5;
  return a + b + num;
}
answer = calculator(4);
console.log(answer);
// 'a' is a constant and can’t be changed. 'a' is assigned a value: 10.
// calculator() takes an input 'num'
// calculator() has a local variable 'b', 'b' has value of : 5
// calculator() returns a result of a + b + num
// 'answer' is assigned the output of calculator()
// 'answer' is logged to the console.
