import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'comp-boundary-1-1-1',
  template: `
    <div class="row">
      <div class="col-12">
        <h3>Value: {{value}}</h3>
        <h3>CD: OnPush</h3>
        <dirty-check></dirty-check>
      </div>
    </div>
  `,
  host: {class: 'comp'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentBoundary1_1_1Component {

  @Input()
  value: unknown;

  constructor() {
  }
}
