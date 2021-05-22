import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  ɵdetectChanges,
  ɵmarkDirty
} from '@angular/core';

@Component({
  selector: 'cd-nested-2-1',
  template: `
    <div class="row">
      <div class="col-12">
        <h3>OnPush</h3>
        <dirty-check></dirty-check>
        <hr/>
        <button (click)="cdr.markForCheck()">
          markForCheck
        </button>
        <button [unpatch] (click)="cdr.detectChanges()">
          detectChanges
        </button>
        <button [unpatch] (click)="markDirty()">
          ɵmarkDirty
        </button>
        <button [unpatch] (click)="detectChanges()">
          ɵdetectChanges
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <cd-nested-2-1-1></cd-nested-2-1-1>
      </div>
    </div>
  `,
  host: {class: 'cd-nested'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdNested2_1Component {
  detectChanges = () => ɵdetectChanges(this);
  markDirty = () => ɵmarkDirty(this);

  constructor(public cdr: ChangeDetectorRef) {
  }
}
