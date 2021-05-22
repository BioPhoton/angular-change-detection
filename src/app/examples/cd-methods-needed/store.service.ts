import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  value$ = new BehaviorSubject<number>(1)

  updateValue() {
    this.value$.next(this.value$.getValue() + 1)
  }

  constructor() { }
}
