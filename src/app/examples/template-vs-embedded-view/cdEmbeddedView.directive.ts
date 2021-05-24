import { ChangeDetectorRef, Directive, EmbeddedViewRef, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { ObservableInput, ReplaySubject, Subscription, Unsubscribable } from 'rxjs';
import { distinctUntilChanged, switchAll } from 'rxjs/operators';

export interface ViewContext<T> {
  // to enable `as` syntax we have to assign the directives selector (var as v)
  pocLet: T;
  $implicit: T,
  $error: false | Error,
  $complete: boolean,
  $suspense: boolean
}

@Directive({
  selector: '[cdEmbeddedView]'
})
export class CdEmbeddedViewDirective<U> implements OnInit, OnDestroy {
  observables$ = new ReplaySubject(1);
  viewContext = { $implicit: undefined };
  embeddedView: EmbeddedViewRef<any>;
  values$ = this.observables$
    .pipe(
      distinctUntilChanged(),
      switchAll()
    );

  @Input('cdEmbeddedViewDetach') detach = false;
  @Input('cdEmbeddedViewLazy') lazy = false;

  @Input()
  set cdEmbeddedView(potentialObservable: ObservableInput<U> | null | undefined) {
    this.observables$.next(potentialObservable);
  }

  private subscription: Unsubscribable = new Subscription();

  constructor(
    private cdRef: ChangeDetectorRef,
    private readonly nextTemplateRef: TemplateRef<ViewContext<U>>,
    private readonly viewContainerRef: ViewContainerRef
  ) {

  }

  ngOnInit(): void {
    if (!this.lazy) {
      this.createEmbeddedView();
    }
    this.subscription = this.values$
      .subscribe(
        v => {
          if (!this.embeddedView) {
            this.createEmbeddedView();
          }
          this.viewContext.$implicit = v;
          this.embeddedView.detectChanges();
        }
      );
  }

  ngOnDestroy(): void {
    this.viewContainerRef.clear();
    this.subscription.unsubscribe();
  }

  private createEmbeddedView(): void {
    this.embeddedView = this.viewContainerRef.createEmbeddedView(
      this.nextTemplateRef,
      this.viewContext
    );
    if (this.detach) {
      this.embeddedView.detach();
      this.embeddedView.detectChanges();
    }
  }

}
