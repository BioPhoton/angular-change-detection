import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'nested-observable',
  template: `
    <div class="row">
      <div class="col-12">
        <div class="d-flex">
          <h3>$ Passthrough</h3>
          <div><strong>Level: {{ total - level }}</strong></div>
          <div>Dirty Checks: <dirty-check-rounded></dirty-check-rounded></div>
        </div>
        <ng-container *ngIf="level === 0; else: branch">
          <!-- TODO: replace custom async with sub in component -->
          <h3>Value: {{ renderValue }}</h3>
        </ng-container>
        <ng-template #branch>
          <nested-observable [total]="total" [level]="level-1" [value$]="value$"></nested-observable>
        </ng-template>
      </div>
    </div>`
  ,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        display: block;
        border: 2px solid green;
      }
    `
  ]
})
export class NestedObservableComponent implements OnChanges, OnDestroy {

  @HostBinding('style.paddingLeft.px')
  @HostBinding('style.paddingRight.px')
  get padding(): number {
    return (this.total - this.level);
  }

  @HostBinding('style.borderBottomWidth.px')
  get borderBottomWidth(): number {
    return this.level === (this.total - 1) ? 2 : 0;
  }


  @Input()
  set depth(d) {
    this.total = d;
    this.level = this.total - 1;
  }

  @Input() total: number;
  @Input() level: number;
  @Input() value$: Observable<any>;

  private _sub = new Subscription();

  renderValue: any;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this._sub.unsubscribe();
    if (this.level === 0) {
      this._sub = this.value$.subscribe(v => {
        this.renderValue = v;
        this.cdRef.detectChanges();
      });
    }
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }
}
