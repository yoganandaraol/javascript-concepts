/*

    Composition is a fundamental concept in functional programming 
    that involves combining smaller functions to create more complex ones. 
    
    In composition, functions are treated as first-class objects and 
    can be passed as arguments, returned as values, 
    and composed together to create new functions.

    There are two types of function composition:

    1. Pipeline or data-flow composition: 
        This type of composition involves passing the output of one function 
        as the input of the next function in a sequence. 
        In other words, it creates a pipeline or data flow of functions.

    2. Higher-order function composition: 
        This type of composition involves combining functions to create new functions 
        that take functions as arguments and return functions as results.

*/

// Pipeline or data-flow composition

const add = x => y => x + y;
const double = x => x * 2;

console.log(add(3)(2));
console.log(add(5)(double(4)));


// Higher-Order function composition

const filter = fn => arr => arr.filter(fn);
const map = fn => arr => arr.map(fn);