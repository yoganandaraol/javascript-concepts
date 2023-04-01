/**
 * Problem:
 * 
 */

function outer() {
  const name = 'John';
  function inner() {
    console.log(`Hello ${name}!`);
  }
  return inner;
}

const innerFn = outer();
innerFn(); // Output: Hello John!

// Attempting to access `name` variable outside of the `outer` function results in an error
console.log(name); // Uncaught ReferenceError: name is not defined
