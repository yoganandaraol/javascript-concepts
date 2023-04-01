import { of } from 'rxjs'

const observable = of('data 1', 'data 2', 'data 3') // Emits a sequence of values.

observable.subscribe({
  next: data => {
    console.log(data)
    console.log("--------")
  },
  error: error => console.error(error),
  complete: () => console.log('Complete')
})
