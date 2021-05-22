import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core'

@Component({
  selector: 'comp-boundary-2',
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
        <comp-boundary-2-1 [value]="_value">
        </comp-boundary-2-1>
      </div>
      <div class="col-6">
        <comp-boundary-2-1 [value]="_value">
        </comp-boundary-2-1>
      </div>
    </div>
  `,
  host: { class: 'cd-nested' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentBoundary2Component {

  _value: unknown;
  @Input()
  set value(value: unknown) {
    console.log('v', value);
    this._value = value;
  }

}
