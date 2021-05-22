import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core'
import { StoreService } from './store.service'

@Component({
  selector: 'app-child-two',
  template: `
    <div class="row">
      <div class="col-12">
        <h3>OnPush</h3>
        <h1>Store value: {{storeValue}}</h1>
        <dirty-check></dirty-check>
        <hr/>
        <button (click)="store.updateValue()">
          update value in store
        </button>
        <button (click)="cdr.markForCheck()">
          markForCheck
        </button>
        <button  (click)="cdr.detectChanges()">
          detectChanges
        </button>
      </div>
    </div>

  `,
  host: { class: 'cd-nested' },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdNeededChildTwoComponent implements OnInit {

  constructor(public cdr: ChangeDetectorRef, public store: StoreService) { }

  get storeValue(): number {
    return this.store.value$.getValue()
  }

  ngOnInit(): void {
    //this.store.value$.subscribe(() => {
    //  this.cdr.markForCheck()
    //})
  }

}
