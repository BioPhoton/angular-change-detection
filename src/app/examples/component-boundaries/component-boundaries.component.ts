import {ChangeDetectionStrategy, Component} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {scan} from "rxjs/operators";

@Component({
  selector: 'component-boundaries',
  template: `
    <h1>Component Boundaries</h1>
    <div class="row">
      <div class="col">
        <h2>Static</h2>
        <div class="mb-1">
          <button (click)="staticVal.next(0)">
            +
          </button>
        </div>
        <recursive-static [depth]="5" [value]="5"></recursive-static>
      </div>
      <div class="col">
        <h2>Observable</h2>
        <div>
          <button [unpatch] (click)="observableVal.next(0)">
            +
          </button>
        </div>
        <!--<recursive-observable [depth]="depth" [value$]="observableVal.int$"></recursive-observable>-->
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class ComponentBoundariesComponent {
  min = 0;
  max = 5;

  displayStates = {
    none: 0,
    all: 1,
    static: 2,
    observable: 3
  };
  isVisible = true;

  staticVal = new BehaviorSubject<number>(0);
  staticVal$ = this.staticVal.pipe(scan(a => ++a, 0));
  observableVal = new BehaviorSubject(0);
  observableVal$ = this.staticVal.pipe(scan(a => ++a, 0));

  private _depth = 5;
  set depth(depth: number) {
    this._depth = depth >= 1 ? depth : 1;
  }

  get depth(): number {
    return this._depth;
  }

}
