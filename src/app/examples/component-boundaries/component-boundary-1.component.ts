import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'comp-boundary-1',
  template: `
    <div class="row">
      <div class="col-12">
        <h3>CD: OnPush</h3>
        <dirty-check></dirty-check>
        <hr/>
      </div>
    </div>

    <div class="row">
      <div class="col-6">
        <comp-boundary-1-1 [value]="value">
        </comp-boundary-1-1>
      </div>
      <div class="col-6">
        <comp-boundary-1-1 [value]="value">
        </comp-boundary-1-1>
      </div>
    </div>
  `,
  host: { class: 'cd-nested' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentBoundary1Component {

  @Input()
  value: unknown;

}
