import { from } from 'rxjs';

const topics = ["asynchronous", "reactive", "observable", "promise", "async/await"];
const observable = from(topics); // rxjs.from retuns observable

observable.subscribe({
    next: data => {
        console.log(data)
        console.log("------")
    },
    error: error => console.log(error),
    complete: () => console.log("Complete")
});