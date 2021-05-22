import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {scan, tap} from "rxjs/operators";

@Component({
  selector: 'component-boundaries',
  template: `
    <h1>Component Boundaries</h1>
    <div class="row">
      <div class="col">
        <h2>Static</h2>
        <div class="mb-1">
          <button (click)="staticValInc()">
            +
          </button>
        </div>
        <comp-boundary-1 [value]="staticVal"></comp-boundary-1>
      </div>
      <div class="col">
        <h2>Observable</h2>
        <div>
          <button (click)="observableVal.next(0)">
            +
          </button>
        </div>
        <comp-boundary-2 [value]="observableVal$"></comp-boundary-2>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ComponentBoundariesComponent {

  staticVal = 0;
  observableVal = new BehaviorSubject(0);
  observableVal$ = this.observableVal.pipe(scan(a => ++a, 0), tap(console.log));
  staticValInc = () => ++this.staticVal;

}
