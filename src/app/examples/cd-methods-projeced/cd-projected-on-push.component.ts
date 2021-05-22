import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ɵdetectChanges, ɵmarkDirty} from '@angular/core';

@Component({
  selector: 'cd-projectd-on-push',
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
        <ng-content></ng-content>
      </div>
    </div>
  `,
  host: {
    class: 'cd-projected'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdProjectedOnPushComponent {
  detectChanges = () => ɵdetectChanges(this);
  markDirty = () => ɵmarkDirty(this);

  constructor(public cdr: ChangeDetectorRef) {
  }
}
