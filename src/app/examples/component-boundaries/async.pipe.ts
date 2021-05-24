import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { distinctUntilChanged, switchAll } from 'rxjs/operators';

@Pipe({
  name: 'async',
  pure: false
})
export class AsyncPipe implements OnDestroy, PipeTransform {

  private _sub = new Subscription();

  private currentValue: any;
  private _observables$ = new ReplaySubject<Observable<any>>();
  private observables$ = this._observables$.pipe(
    distinctUntilChanged(),
    switchAll(),
    distinctUntilChanged(),
  )

  constructor(
    private cdRef: ChangeDetectorRef
  ) {
    this._sub.add(
      this.observables$.subscribe(v => {
        this.currentValue = v;
        this.cdRef.detectChanges();
      })
    );
  }


  transform<T>(value$: Observable<T>): T {
    this._observables$.next(value$);
    return this.currentValue as T;
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
