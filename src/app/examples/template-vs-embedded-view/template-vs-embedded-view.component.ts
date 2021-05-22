import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from 'rxjs';
import {scan} from 'rxjs/operators';

@Component({
  selector: 'template-vs-embedded-view',
  template: `
    <h2>
      Component Template vs Embedded View
    </h2>
    <dirty-check></dirty-check>
    <hr/>
    <div>

      <button (click)="btn2Click$.next($event)">
        cdRef#detectChanges
      </button>

      <button [unpatch] (click)="btn1Click$.next($event)">
        EmbeddedView cdRef#detectChanges
      </button>

    </div>
    <div class="row">
      <div class="col-sm-6">
        <h3>async</h3>
        <ng-container *ngIf="value2$ | async">
          <dirty-check></dirty-check>
        </ng-container>
      </div>

      <div class="col-sm-6">
        <h3>*rxLet EmbeddedView cdRef#detectChanges</h3>
        <ng-container *cdEmbeddedView="value1$; let value">
          <dirty-check></dirty-check>
        </ng-container>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TemplateVsEmbeddedViewComponent {
  btn1Click$ = new Subject<Event>();
  btn2Click$ = new Subject<Event>();
  value1$ = this.btn1Click$.pipe(
    scan(a => ++a, 0)
  );
  value2$ = this.btn2Click$.pipe(
    scan(a => ++a, 0)
  );
}
