import { interval } from 'rxjs'

const observable = interval(100) // Emits sequential numbers at a specified interval.

observable.subscribe({
  next: data => console.log(data),
  error: error => console.error(error),
  complete: () => console.log('Complete')
})
