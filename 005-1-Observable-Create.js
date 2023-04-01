import { Observable } from 'rxjs'

const observable = Observable.create(observer => {
  observer.next('data 1')
  observer.next('data 2')
  observer.complete()
})

observable.subscribe({
  next: data => console.log(data),
  error: error => console.error(error),
  complete: () => console.log('Complete')
})
