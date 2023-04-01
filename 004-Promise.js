/* 

    Promises: 
        Promises are a way to handle asynchronous operations and 
        provide a more intuitive way to write async code. 
        
        They allow you to write code that looks synchronous, but actually runs asynchronously. 
        Promises are chainable and allow you to handle success and error cases separately.

    When to use Promises:
        Promises are a good choice when you have a simple asynchronous operation 
        that returns a single value or error. 
        
        Promises are easy to use and provide a straightforward way to handle `success` and `error` cases.
*/

const getData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(resp => resp.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
    })
}

getData()
    .then(data => console.log(data))
    .catch(err => console.log(err));