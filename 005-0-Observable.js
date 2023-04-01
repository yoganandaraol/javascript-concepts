/* 

    Observables: 
        Observables are a more powerful way to handle asynchronous operations than Promises. 
        They allow you to handle multiple values over time, rather than a single value like Promises. 
        Observables can also be cancelled and can handle errors more gracefully than Promises.

    When to use Observables:
        Observables are a good choice when you have a more complex or ongoing operation 
        that may return multiple values over time. 
        Observables allow you to handle events and streams of data more easily than Promises. 
        Observables are also more powerful and flexible than Promises.
*/
const Rx = require('rxjs');

const getData = () => {
    return new Rx.Observable(observer => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(data => {
                observer.next(data)
                observer.complete()
            })
            .catch(err => observer.error(err))
    })
}

getData().subscribe({
    next: data => console.log(data),
    error: error => console.log(error),
    complete: () => console.log('--------- Complete ----------')
})