import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'cd-nested-regular-1',
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

    <div class="row">
      <div class="col-6">
        <cd-nested-regular-1-2>
        </cd-nested-regular-1-2>
      </div>
      <div class="col-6">
        <cd-nested-regular-1-2>
        </cd-nested-regular-1-2>
      </div>
    </div>
  `,
  host: { class: 'cd-nested' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class CdNestedRegularComponent {
  justClick() {
    console.log('click')
  }

  constructor(public cdr: ChangeDetectorRef) {
  }

}
