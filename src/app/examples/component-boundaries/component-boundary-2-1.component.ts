import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'comp-boundary-2-1',
  template: `
    <div class="row">
      <div class="col-12">
        <h3>CD: OnPush</h3>
        <dirty-check></dirty-check>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <comp-boundary-2-1-1 [value]="value"></comp-boundary-2-1-1>
      </div>
    </div>
  `,
  host: {class: 'comp'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentBoundary2_1Component {

  @Input()
  value: unknown;

}
