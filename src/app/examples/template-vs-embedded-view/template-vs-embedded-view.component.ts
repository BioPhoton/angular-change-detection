import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Subject} from 'rxjs';
import {scan} from 'rxjs/operators';

@Component({
  selector: 'template-vs-embedded-view',
  template: `
    <h2>
      Component Template vs Embedded View
    </h2>
    <div>Parent component dirty checks: <dirty-check-rounded></dirty-check-rounded></div>
    <hr/>
    <div>
    </div>
    <div class="row">
      <div class="col-6 view">
        <h3>async pipe: part of component</h3>
        <div>value: {{ value2$ | async }}</div>
        <div>Dirty checks: <dirty-check-rounded></dirty-check-rounded></div>
        <button (click)="btn2Click$.next($event)">
          cdRef#detectChanges
        </button>
      </div>

      <div class="col-6 view">
        <h3>EmbeddedViewRef</h3>
        <ng-container *cdEmbeddedView="value1$; let value">
          <div>value: {{ value }}</div>
          <div>Dirty checks: <dirty-check-rounded></dirty-check-rounded></div>
          <button [unpatch] (click)="btn1Click$.next($event)">
            EmbeddedView cdRef#detectChanges
          </button>
        </ng-container>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    .view {
      border: 1px solid green;
      padding: 1rem;
    }
  `]
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
