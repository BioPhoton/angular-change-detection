import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'nested-static',
  template: `
    <div class="row">
      <div class="col-12">
        <div class="d-flex">
          <h3>Regular Passthrough</h3>
          <div><strong>Level: {{ total - level }}</strong></div>
          <div>Dirty Checks: <dirty-check-rounded></dirty-check-rounded></div>
        </div>
        <ng-container *ngIf="level === 0; else: branch">
          <h3>Value: {{ value }}</h3>
        </ng-container>
        <ng-template #branch>
          <nested-static [total]="total" [level]="level-1" [value]="value"></nested-static>
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
export class NestedStaticComponent {

  @HostBinding('style.paddingLeft.px')
  get paddingLeft(): number {
    return (this.total - this.level) * 5;
  }

  @HostBinding('style.borderBottomWidth.px')
  get borderBottomWidth(): number {
    return this.level === (this.total - 1) ? 2 : 0;
  }

  private _rendered = 0;
  get checked(): number {
    return this._rendered++;
  }

  @Input()
  set depth(d) {
    this.total = d;
    this.level = this.total - 1;
  }

  @Input() total: number;
  @Input() level: number;
  @Input() value: any;
}
