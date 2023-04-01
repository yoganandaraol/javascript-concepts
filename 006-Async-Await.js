/* 

    Async-Await: 
        Async/Await is a newer syntax in JavaScript that allows you to write async code that looks like synchronous code. 
        It uses Promises under the hood, but provides a simpler syntax for writing async code. 
        Async/Await makes it easier to handle errors and allows you to use try/catch blocks for error handling.

    When to use Async-Await:
        Async/Await is a good choice when you want to handle errors with try/catch blocks 
        and want to write async code that is easier to understand and maintain
*/

const getData = async () => {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await resp.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

getData()
    .then(data => console.log(data));
