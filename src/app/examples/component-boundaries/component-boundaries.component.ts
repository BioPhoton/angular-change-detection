import {ChangeDetectionStrategy, Component} from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, scan, shareReplay, tap } from 'rxjs/operators';

@Component({
  selector: 'component-boundaries',
  template: `
    <div class="container-fluid">
      <h2>Component Boundaries</h2>
      <label style="display: block">Nesting level {{ depth }}</label>
      <input type="range" min="2" max="25" [(ngModel)]="depth">
      <div class="row">
        <div class="col-6">
          <h2>Static value passthrough (NgZone included)</h2>
          <div class="mb-1">
            <button (click)="staticValInc()">
              Change value
            </button>
          </div>
          <nested-static [value]="staticVal" [depth]="depth"></nested-static>
        </div>
        <div class="col-6">
          <h2>Observable passthrough</h2>
          <div>
            <button (click)="observableVal.next(0)">
              Change value
            </button>
          </div>
          <nested-observable [value$]="observableVal$" [depth]="depth"></nested-observable>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentBoundariesComponent {

  depth = 2;
  staticVal = 0;
  observableVal = new ReplaySubject(0);
  observableVal$ = this.observableVal.pipe(scan(a => ++a, 0), shareReplay(1));
  staticValInc = () => ++this.staticVal;

}
