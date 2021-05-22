import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewEncapsulation,
  ɵdetectChanges,
  ɵmarkDirty
} from '@angular/core';

@Component({
  selector: 'cd-nested-regular-2',
  template: `
    <div class="row">
      <div class="col-12">
        <h3>OnPush</h3>
        <dirty-check></dirty-check>
        <hr/>
        <button (click)="justClick()">
          just click
        </button>
<!--        <button (click)="cdr.markForCheck()">-->
<!--          markForCheck-->
<!--        </button>-->
<!--        <button (click)="cdr.detectChanges()">-->
<!--          detectChanges-->
<!--        </button>-->
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <cd-nested-regular-2-1></cd-nested-regular-2-1>
      </div>
    </div>
  `,
  host: {class: 'cd-nested'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdNestedRegular2Component {
  justClick() {
    console.log('click')
  }
  constructor(public cdr: ChangeDetectorRef) {
  }
}
