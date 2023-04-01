/**
 * Problem:
 * 
 */

function outer() {
  const name = 'Yoga';
  function inner() {
    console.log(`Hello ${name}!`);
  }
  return inner;
}

// To access the variable defined in outer function is possible
// Attempting to access `name` variable outside of the `outer` function results in an error

// PLAY
// console.log(name); // Uncaught ReferenceError: name is not defined

// To Solve this problem we can use closures concept in javascript
// define an inner function in side outer function and return inner function reference.
// Now by calling inner function we can access variable defined in outer function to accomplish intended behaviour\

// PLAY
const innerFn = outer();
innerFn(); // Output: Hello Yoga!

/*
    The concept of closures can be used in 
        1. Private Variables and functions
        2. Paritial Application and Currying
        3. Callback functions
        4. Event Listners
*/