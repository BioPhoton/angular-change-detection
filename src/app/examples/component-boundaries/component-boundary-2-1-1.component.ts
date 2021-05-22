import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation} from '@angular/core'
import {Observable} from "rxjs";

@Component({
  selector: 'comp-boundary-2-1-1',
  template: `
    <div class="row">
      <div class="col-12">
        <h3>Value: {{value | async}}</h3>
        <h3>CD: OnPush</h3>
        <dirty-check></dirty-check>
      </div>
    </div>
  `,
  host: {class: 'comp'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentBoundary2_1_1Component {

  @Input()
  value: Observable<unknown>;

  constructor() {
  }
}
