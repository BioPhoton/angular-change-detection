import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private checks$ = new BehaviorSubject(0)
  private inits$ = new BehaviorSubject(0)

  constructor() { }

  get dirtyChecks(): Observable<number> {
    return this.checks$.asObservable()
  }

  registerDirtyCheck(): void {
    this.checks$.next(this.checks$.getValue() + 1)
  }

  get componentInits(): Observable<number> {
    return this.inits$.asObservable()
  }

  registerComponentInit(): void {
    this.inits$.next(this.inits$.getValue() + 1)
  }
}
