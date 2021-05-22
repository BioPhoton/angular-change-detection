import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'cd-nested-regular-1-2',
  template: `
    <div class="row">
      <div class="col-12">

        <h3>Default</h3>
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
  `,
  host: {class: 'cd-nested'},
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CdNestedRegular1_2Component {
  justClick() {
    console.log('click')
  }
  constructor(public cdr: ChangeDetectorRef) {
  }
}
