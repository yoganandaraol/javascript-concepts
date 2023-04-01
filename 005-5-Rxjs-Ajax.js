import { ajax } from 'rxjs/ajax'

const url = 'https://jsonplaceholder.typicode.com/users'

const observable = ajax.getJSON(url)

observable.subscribe({
  next: data => {
    console.log(data)
    console.log("------")
  },
  error: error => console.error(error),
  complete: () => console.log('Complete')
})
